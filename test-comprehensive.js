const { chromium } = require('playwright');
const fs = require('fs');

async function comprehensiveTest() {
  console.log('Starting comprehensive test of all pages...\n');
  console.log('='.repeat(60) + '\n');

  const browser = await chromium.launch({
    headless: false, // Run in visible mode
    slowMo: 300 // Slow down for visibility
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  // Create screenshots directory
  if (!fs.existsSync('test-screenshots')) {
    fs.mkdirSync('test-screenshots');
  }

  const results = [];

  try {
    // 1. HOME PAGE TEST
    console.log('🏠 TESTING HOME PAGE');
    console.log('-'.repeat(40));

    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/01-home-page.png', fullPage: true });

    const homeTests = {
      title: await page.title(),
      h1Text: await page.locator('h1').first().textContent(),
      description: await page.locator('p').first().textContent(),
      featuresCount: await page.locator('li').count(),
      ctaButton: await page.locator('a:has-text("Get Started")').isVisible(),
      navLinks: await page.locator('nav a, header a').count()
    };

    console.log(`  ✓ Page Title: "${homeTests.title}"`);
    console.log(`  ✓ H1 Heading: "${homeTests.h1Text}"`);
    console.log(`  ✓ Description: "${homeTests.description?.substring(0, 60)}..."`);
    console.log(`  ✓ Features Listed: ${homeTests.featuresCount}`);
    console.log(`  ✓ CTA Button Present: ${homeTests.ctaButton}`);
    console.log(`  ✓ Navigation Links: ${homeTests.navLinks}`);

    results.push({
      page: 'Home',
      passed: homeTests.title && homeTests.h1Text && homeTests.featuresCount > 0,
      tests: homeTests
    });

    console.log('\n');

    // 2. ABOUT PAGE TEST
    console.log('📖 TESTING ABOUT PAGE');
    console.log('-'.repeat(40));

    await page.click('a[href="/about"], nav a:has-text("About")');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/02-about-page.png', fullPage: true });

    const aboutTests = {
      url: page.url(),
      h1Text: await page.locator('h1').first().textContent(),
      missionHeading: await page.locator('h2:has-text("Our Mission")').isVisible(),
      missionText: await page.locator('p').nth(1).textContent(),
      infoCards: await page.locator('.info-card, div[class*="card"], div[class*="info"]').count()
    };

    console.log(`  ✓ URL: ${aboutTests.url}`);
    console.log(`  ✓ Page Title: "${aboutTests.h1Text}"`);
    console.log(`  ✓ Mission Section: ${aboutTests.missionHeading}`);
    console.log(`  ✓ Mission Text: "${aboutTests.missionText?.substring(0, 60)}..."`);
    console.log(`  ✓ Info Cards: ${aboutTests.infoCards}`);

    results.push({
      page: 'About',
      passed: aboutTests.url.includes('/about') && aboutTests.h1Text && aboutTests.missionHeading,
      tests: aboutTests
    });

    console.log('\n');

    // 3. PRODUCTS PAGE TEST
    console.log('🛍️ TESTING PRODUCTS PAGE');
    console.log('-'.repeat(40));

    await page.click('a[href="/products"], nav a:has-text("Products")');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/03-products-page.png', fullPage: true });

    // Look for product containers and their content
    const productContainers = await page.locator('.product-card, div[class*="product"], article').count();
    const productNames = await page.locator('h2, h3').allTextContents();
    const prices = await page.locator('text=/\\$[0-9]+/').allTextContents();
    const addToCartButtons = await page.locator('button:has-text("Add to Cart")').count();

    const productsTests = {
      url: page.url(),
      h1Text: await page.locator('h1').first().textContent(),
      productContainers,
      productNames: productNames.filter(name => name && !name.includes('Products')),
      prices,
      addToCartButtons
    };

    console.log(`  ✓ URL: ${productsTests.url}`);
    console.log(`  ✓ Page Title: "${productsTests.h1Text}"`);
    console.log(`  ✓ Product Containers: ${productsTests.productContainers}`);
    console.log(`  ✓ Product Names: ${productsTests.productNames.join(', ')}`);
    console.log(`  ✓ Prices Found: ${productsTests.prices.join(', ')}`);
    console.log(`  ✓ Add to Cart Buttons: ${productsTests.addToCartButtons}`);

    // Test clicking an Add to Cart button
    if (addToCartButtons > 0) {
      await page.locator('button:has-text("Add to Cart")').first().click();
      await page.waitForTimeout(1000);
      console.log(`  ✓ Clicked first "Add to Cart" button`);
      await page.screenshot({ path: 'test-screenshots/03b-products-after-click.png' });
    }

    results.push({
      page: 'Products',
      passed: productsTests.url.includes('/products') &&
              productsTests.productNames.length >= 4 &&
              productsTests.prices.length >= 4 &&
              productsTests.addToCartButtons >= 4,
      tests: productsTests
    });

    console.log('\n');

    // 4. CONTACT PAGE TEST
    console.log('📧 TESTING CONTACT PAGE');
    console.log('-'.repeat(40));

    await page.click('a[href="/contact"], nav a:has-text("Contact")');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/04-contact-page.png', fullPage: true });

    const contactTests = {
      url: page.url(),
      h1Text: await page.locator('h1').first().textContent(),
      formExists: await page.locator('form').count() > 0,
      nameInput: await page.locator('input[name="name"], input#name, input[type="text"]').first().isVisible(),
      emailInput: await page.locator('input[name="email"], input#email, input[type="email"]').isVisible(),
      messageTextarea: await page.locator('textarea').isVisible(),
      submitButton: await page.locator('button[type="submit"]').isVisible()
    };

    console.log(`  ✓ URL: ${contactTests.url}`);
    console.log(`  ✓ Page Title: "${contactTests.h1Text}"`);
    console.log(`  ✓ Form Present: ${contactTests.formExists}`);
    console.log(`  ✓ Name Input: ${contactTests.nameInput}`);
    console.log(`  ✓ Email Input: ${contactTests.emailInput}`);
    console.log(`  ✓ Message Textarea: ${contactTests.messageTextarea}`);
    console.log(`  ✓ Submit Button: ${contactTests.submitButton}`);

    // Fill and submit form
    if (contactTests.formExists) {
      console.log('\n  📝 Testing Form Submission...');

      await page.fill('input[name="name"], input#name, input[type="text"]', 'John Doe');
      await page.fill('input[name="email"], input#email, input[type="email"]', 'john.doe@example.com');
      await page.fill('textarea', 'This is a test message from the automated testing suite.');

      await page.screenshot({ path: 'test-screenshots/04b-contact-filled.png' });
      console.log('  ✓ Form filled with test data');

      await page.click('button[type="submit"]');
      await page.waitForTimeout(2000);

      // Check for success message
      const successVisible = await page.locator('text=/success|thank|submitted/i').first().isVisible().catch(() => false);
      const alertVisible = await page.locator('.alert, [role="alert"], div[class*="success"]').isVisible().catch(() => false);

      console.log(`  ✓ Success message displayed: ${successVisible || alertVisible}`);
      await page.screenshot({ path: 'test-screenshots/04c-contact-submitted.png' });

      contactTests.formSubmission = successVisible || alertVisible;
    }

    results.push({
      page: 'Contact',
      passed: contactTests.url.includes('/contact') &&
              contactTests.formExists &&
              contactTests.formSubmission,
      tests: contactTests
    });

    console.log('\n');

    // 5. NAVIGATION TEST
    console.log('🧭 TESTING NAVIGATION');
    console.log('-'.repeat(40));

    // Go back to home
    await page.click('a[href="/"], nav a:has-text("Home")');
    await page.waitForLoadState('networkidle');

    const navTests = {
      homeUrl: page.url() === 'http://localhost:3000/' || page.url() === 'http://localhost:3000',
      aboutLink: await page.locator('a[href="/about"]').isVisible(),
      productsLink: await page.locator('a[href="/products"]').isVisible(),
      contactLink: await page.locator('a[href="/contact"]').isVisible()
    };

    console.log(`  ✓ Navigated to Home: ${navTests.homeUrl}`);
    console.log(`  ✓ About link visible: ${navTests.aboutLink}`);
    console.log(`  ✓ Products link visible: ${navTests.productsLink}`);
    console.log(`  ✓ Contact link visible: ${navTests.contactLink}`);

    results.push({
      page: 'Navigation',
      passed: navTests.homeUrl && navTests.aboutLink && navTests.productsLink && navTests.contactLink,
      tests: navTests
    });

    console.log('\n');

  } catch (error) {
    console.error('Test error:', error);
  } finally {
    // FINAL REPORT
    console.log('='.repeat(60));
    console.log('📊 FINAL TEST REPORT');
    console.log('='.repeat(60) + '\n');

    let totalPassed = 0;
    let totalFailed = 0;

    results.forEach(result => {
      const status = result.passed ? '✅ PASSED' : '❌ FAILED';
      console.log(`${status} - ${result.page} Page`);

      if (result.passed) {
        totalPassed++;
      } else {
        totalFailed++;
        // Show what failed
        Object.entries(result.tests).forEach(([key, value]) => {
          if (!value || (Array.isArray(value) && value.length === 0)) {
            console.log(`    ⚠️ ${key}: ${value}`);
          }
        });
      }
    });

    console.log('\n' + '='.repeat(60));
    console.log(`TOTAL: ${totalPassed} PASSED / ${totalFailed} FAILED`);

    if (totalFailed === 0) {
      console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
    } else {
      console.log('⚠️ Some tests failed. Check the details above.');
    }
    console.log('='.repeat(60));

    console.log('\n📸 Screenshots saved in test-screenshots/ directory');

    await browser.close();
  }
}

comprehensiveTest().catch(console.error);