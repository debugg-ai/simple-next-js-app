const { chromium } = require('playwright');

async function debugTest() {
  console.log('Starting debug test of Next.js application...\n');

  const browser = await chromium.launch({
    headless: true, // Run headless for faster execution
    timeout: 60000
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  // Enable console logging
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR:', msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log('PAGE CRASH:', error);
  });

  const testResults = [];

  try {
    // Test Home Page
    console.log('Testing Home Page...');
    try {
      const response = await page.goto('http://localhost:3000', {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });

      console.log('  Response status:', response?.status());

      // Wait a bit for React to render
      await page.waitForTimeout(2000);

      // Get page content
      const pageTitle = await page.title();
      console.log('  Page title:', pageTitle);

      // Try to get any text content
      const bodyText = await page.locator('body').textContent();
      console.log('  Body has content:', bodyText.length > 0 ? `Yes (${bodyText.length} chars)` : 'No');

      // Look for specific elements
      const h1Count = await page.locator('h1').count();
      console.log('  H1 elements found:', h1Count);

      if (h1Count > 0) {
        const h1Text = await page.locator('h1').first().textContent();
        console.log('  First H1 text:', h1Text);
      }

      // Look for navigation
      const navLinks = await page.locator('nav a, a[href]').count();
      console.log('  Navigation links found:', navLinks);

      // Take screenshot
      await page.screenshot({ path: 'debug-home.png' });

      testResults.push({ page: 'Home', success: response?.status() === 200, details: `Status: ${response?.status()}, H1s: ${h1Count}, Links: ${navLinks}` });

    } catch (error) {
      console.log('  ERROR:', error.message);
      testResults.push({ page: 'Home', success: false, details: error.message });
    }

    console.log('');

    // Test About Page
    console.log('Testing About Page...');
    try {
      const response = await page.goto('http://localhost:3000/about', {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });

      console.log('  Response status:', response?.status());
      await page.waitForTimeout(2000);

      const h1Count = await page.locator('h1').count();
      const h2Count = await page.locator('h2').count();
      console.log('  H1 elements:', h1Count, 'H2 elements:', h2Count);

      await page.screenshot({ path: 'debug-about.png' });

      testResults.push({ page: 'About', success: response?.status() === 200, details: `Status: ${response?.status()}, H1s: ${h1Count}, H2s: ${h2Count}` });

    } catch (error) {
      console.log('  ERROR:', error.message);
      testResults.push({ page: 'About', success: false, details: error.message });
    }

    console.log('');

    // Test Contact Page
    console.log('Testing Contact Page...');
    try {
      const response = await page.goto('http://localhost:3000/contact', {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });

      console.log('  Response status:', response?.status());
      await page.waitForTimeout(2000);

      const formExists = await page.locator('form').count() > 0;
      const inputCount = await page.locator('input').count();
      const textareaCount = await page.locator('textarea').count();
      const buttonCount = await page.locator('button').count();

      console.log('  Form exists:', formExists);
      console.log('  Inputs:', inputCount, 'Textareas:', textareaCount, 'Buttons:', buttonCount);

      if (formExists && inputCount >= 2 && textareaCount >= 1) {
        // Try to fill and submit form
        try {
          await page.fill('input[type="text"], input[name="name"], input#name', 'Test Name');
          await page.fill('input[type="email"], input[name="email"], input#email', 'test@test.com');
          await page.fill('textarea', 'Test message');

          await page.screenshot({ path: 'debug-contact-filled.png' });

          // Click submit button
          await page.click('button[type="submit"], button');
          await page.waitForTimeout(2000);

          // Check for success message
          const pageText = await page.locator('body').textContent();
          const hasSuccess = pageText.toLowerCase().includes('success') || pageText.toLowerCase().includes('thank');
          console.log('  Form submission success message:', hasSuccess);

          await page.screenshot({ path: 'debug-contact-submitted.png' });
        } catch (formError) {
          console.log('  Form interaction error:', formError.message);
        }
      }

      testResults.push({ page: 'Contact', success: response?.status() === 200 && formExists, details: `Status: ${response?.status()}, Form: ${formExists}` });

    } catch (error) {
      console.log('  ERROR:', error.message);
      testResults.push({ page: 'Contact', success: false, details: error.message });
    }

    console.log('');

    // Test Products Page
    console.log('Testing Products Page...');
    try {
      const response = await page.goto('http://localhost:3000/products', {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });

      console.log('  Response status:', response?.status());
      await page.waitForTimeout(2000);

      // Look for product-related content
      const h2Count = await page.locator('h2').count();
      const buttonCount = await page.locator('button').count();
      const priceMatches = await page.locator('text=/\\$/').count();

      console.log('  H2 elements (likely products):', h2Count);
      console.log('  Buttons (likely Add to Cart):', buttonCount);
      console.log('  Price indicators ($):', priceMatches);

      // Get product names
      if (h2Count > 0) {
        const productNames = await page.locator('h2').allTextContents();
        console.log('  Product names found:', productNames.slice(0, 5).join(', '));
      }

      await page.screenshot({ path: 'debug-products.png' });

      testResults.push({ page: 'Products', success: response?.status() === 200 && h2Count >= 4, details: `Status: ${response?.status()}, Products: ${h2Count}` });

    } catch (error) {
      console.log('  ERROR:', error.message);
      testResults.push({ page: 'Products', success: false, details: error.message });
    }

    console.log('');

    // Test Navigation
    console.log('Testing Navigation...');
    try {
      await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000);

      // Find and test navigation links
      const navLinks = await page.locator('a[href="/about"], a[href="/products"], a[href="/contact"]').count();
      console.log('  Navigation links found:', navLinks);

      if (navLinks > 0) {
        // Test navigation to About
        await page.click('a[href="/about"]').catch(() => null);
        await page.waitForTimeout(1000);
        const onAbout = page.url().includes('/about');
        console.log('  Navigate to About:', onAbout ? 'Success' : 'Failed');

        // Test navigation to Products
        await page.click('a[href="/products"]').catch(() => null);
        await page.waitForTimeout(1000);
        const onProducts = page.url().includes('/products');
        console.log('  Navigate to Products:', onProducts ? 'Success' : 'Failed');

        testResults.push({ page: 'Navigation', success: onAbout || onProducts, details: `Links work: ${onAbout || onProducts}` });
      } else {
        testResults.push({ page: 'Navigation', success: false, details: 'No navigation links found' });
      }

    } catch (error) {
      console.log('  ERROR:', error.message);
      testResults.push({ page: 'Navigation', success: false, details: error.message });
    }

  } catch (error) {
    console.error('Critical error:', error);
  } finally {
    console.log('\n' + '='.repeat(60));
    console.log('TEST SUMMARY');
    console.log('='.repeat(60));

    testResults.forEach(result => {
      const status = result.success ? '✅ PASS' : '❌ FAIL';
      console.log(`${status} ${result.page}: ${result.details}`);
    });

    const allPassed = testResults.every(r => r.success);
    console.log('='.repeat(60));
    console.log(`OVERALL: ${allPassed ? '✅ ALL TESTS PASSED' : '⚠️ SOME TESTS FAILED'}`);
    console.log('='.repeat(60));

    await browser.close();
  }
}

debugTest().catch(console.error);