const { chromium } = require('playwright');

async function testAllPages() {
  console.log('Starting comprehensive testing of Next.js application...\n');

  // Launch browser in headed mode so we can see the tests
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500 // Slow down for visibility
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  const testResults = {
    homePage: { success: false, details: [] },
    aboutPage: { success: false, details: [] },
    contactPage: { success: false, details: [] },
    productsPage: { success: false, details: [] },
    navigation: { success: false, details: [] }
  };

  try {
    // Test 1: Home Page
    console.log('📍 Testing Home Page (http://localhost:3000)...');
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Take screenshot
    await page.screenshot({ path: 'screenshots/home-page.png', fullPage: true });

    // Check for key elements
    const homeTitle = await page.locator('h1').first().textContent();
    const homeDescription = await page.locator('p').first().textContent();
    const features = await page.locator('ul li').allTextContents();
    const ctaButton = await page.locator('a:has-text("Get Started")').isVisible();

    testResults.homePage.details.push(`Title found: "${homeTitle}"`);
    testResults.homePage.details.push(`Description found: "${homeDescription?.substring(0, 50)}..."`);
    testResults.homePage.details.push(`Features count: ${features.length}`);
    testResults.homePage.details.push(`CTA Button visible: ${ctaButton}`);
    testResults.homePage.success = homeTitle && homeDescription && features.length > 0 && ctaButton;

    console.log('✅ Home page elements verified\n');

    // Test 2: About Page
    console.log('📍 Testing About Page (http://localhost:3000/about)...');
    await page.goto('http://localhost:3000/about');
    await page.waitForLoadState('networkidle');

    await page.screenshot({ path: 'screenshots/about-page.png', fullPage: true });

    const aboutTitle = await page.locator('h1:has-text("About")').textContent();
    const missionSection = await page.locator('h2:has-text("Our Mission")').isVisible();
    const infoCards = await page.locator('.info-card, [class*="card"]').count();

    testResults.aboutPage.details.push(`Title found: "${aboutTitle}"`);
    testResults.aboutPage.details.push(`Mission section visible: ${missionSection}`);
    testResults.aboutPage.details.push(`Info cards count: ${infoCards}`);
    testResults.aboutPage.success = aboutTitle && missionSection && infoCards > 0;

    console.log('✅ About page elements verified\n');

    // Test 3: Contact Page with Form Submission
    console.log('📍 Testing Contact Page (http://localhost:3000/contact)...');
    await page.goto('http://localhost:3000/contact');
    await page.waitForLoadState('networkidle');

    await page.screenshot({ path: 'screenshots/contact-page-before.png', fullPage: true });

    const contactTitle = await page.locator('h1:has-text("Contact")').textContent();
    const formVisible = await page.locator('form').isVisible();

    testResults.contactPage.details.push(`Title found: "${contactTitle}"`);
    testResults.contactPage.details.push(`Form visible: ${formVisible}`);

    if (formVisible) {
      // Fill out the form
      await page.fill('input[name="name"], input#name', 'Test User');
      await page.fill('input[name="email"], input#email', 'test@example.com');
      await page.fill('textarea[name="message"], textarea#message', 'This is a test message from automated testing.');

      // Submit the form
      await page.click('button[type="submit"]');

      // Wait for success message
      await page.waitForTimeout(2000);

      // Check for success message
      const successMessage = await page.locator('text=/success|thank|submitted/i').first().isVisible().catch(() => false);

      await page.screenshot({ path: 'screenshots/contact-page-after.png', fullPage: true });

      testResults.contactPage.details.push(`Form filled and submitted`);
      testResults.contactPage.details.push(`Success message displayed: ${successMessage}`);
      testResults.contactPage.success = contactTitle && formVisible && successMessage;
    } else {
      testResults.contactPage.success = false;
    }

    console.log('✅ Contact page and form submission tested\n');

    // Test 4: Products Page
    console.log('📍 Testing Products Page (http://localhost:3000/products)...');
    await page.goto('http://localhost:3000/products');
    await page.waitForLoadState('networkidle');

    await page.screenshot({ path: 'screenshots/products-page.png', fullPage: true });

    const productsTitle = await page.locator('h1:has-text("Products")').textContent();
    const productCards = await page.locator('.product-card, [class*="product"]').count();
    const productNames = await page.locator('.product-card h2, [class*="product"] h2, h2').allTextContents();
    const prices = await page.locator('text=/\\$[0-9]+/').allTextContents();
    const addToCartButtons = await page.locator('button:has-text("Add to Cart")').count();

    testResults.productsPage.details.push(`Title found: "${productsTitle}"`);
    testResults.productsPage.details.push(`Products displayed: ${productCards || productNames.length}`);
    testResults.productsPage.details.push(`Product names: ${productNames.join(', ')}`);
    testResults.productsPage.details.push(`Prices found: ${prices.length}`);
    testResults.productsPage.details.push(`Add to Cart buttons: ${addToCartButtons}`);
    testResults.productsPage.success = productsTitle && (productCards >= 4 || productNames.length >= 4) && addToCartButtons >= 4;

    console.log('✅ Products page verified\n');

    // Test 5: Navigation Links
    console.log('📍 Testing Navigation Links...');
    await page.goto('http://localhost:3000');

    // Test navigation to About
    await page.click('a[href="/about"], nav a:has-text("About")');
    await page.waitForLoadState('networkidle');
    const onAboutPage = page.url().includes('/about');
    testResults.navigation.details.push(`Navigation to About: ${onAboutPage ? 'Success' : 'Failed'}`);

    // Test navigation to Products
    await page.click('a[href="/products"], nav a:has-text("Products")');
    await page.waitForLoadState('networkidle');
    const onProductsPage = page.url().includes('/products');
    testResults.navigation.details.push(`Navigation to Products: ${onProductsPage ? 'Success' : 'Failed'}`);

    // Test navigation to Contact
    await page.click('a[href="/contact"], nav a:has-text("Contact")');
    await page.waitForLoadState('networkidle');
    const onContactPage = page.url().includes('/contact');
    testResults.navigation.details.push(`Navigation to Contact: ${onContactPage ? 'Success' : 'Failed'}`);

    // Test navigation back to Home
    await page.click('a[href="/"], nav a:has-text("Home")');
    await page.waitForLoadState('networkidle');
    const onHomePage = page.url() === 'http://localhost:3000/';
    testResults.navigation.details.push(`Navigation to Home: ${onHomePage ? 'Success' : 'Failed'}`);

    testResults.navigation.success = onAboutPage && onProductsPage && onContactPage && onHomePage;

    console.log('✅ Navigation links tested\n');

  } catch (error) {
    console.error('Error during testing:', error);
  } finally {
    // Generate final report
    console.log('\n' + '='.repeat(60));
    console.log('TEST RESULTS SUMMARY');
    console.log('='.repeat(60) + '\n');

    for (const [testName, result] of Object.entries(testResults)) {
      const status = result.success ? '✅ PASSED' : '❌ FAILED';
      console.log(`${testName}: ${status}`);
      result.details.forEach(detail => console.log(`  - ${detail}`));
      console.log();
    }

    const allTestsPassed = Object.values(testResults).every(r => r.success);
    console.log('='.repeat(60));
    console.log(`OVERALL STATUS: ${allTestsPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
    console.log('='.repeat(60));

    await browser.close();
  }
}

// Create screenshots directory
const fs = require('fs');
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

testAllPages().catch(console.error);