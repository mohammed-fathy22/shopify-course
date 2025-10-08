# Shopify Theme CI/CD Setup

This repository includes a comprehensive CI/CD pipeline for deploying Shopify themes with RTL support.

## 🚀 Features

- **Automated Theme Validation**: Liquid syntax checking, JSON validation, and theme structure validation
- **Multi-Environment Deployment**: Development, Staging, and Production environments
- **RTL Support**: Built-in support for Arabic and other RTL languages
- **Automated Testing**: Theme checks, linting, and validation
- **Manual Deployment**: Workflow dispatch for manual deployments
- **Backup System**: Automatic backup before production deployments

## 📋 Prerequisites

### Required GitHub Secrets

Set up the following secrets in your GitHub repository settings:

#### Development Environment

- `SHOPIFY_CLI_THEME_TOKEN` - Shopify CLI theme token
- `SHOPIFY_DEV_STORE` - Development store name (e.g., `your-dev-store`)
- `SHOPIFY_DEV_THEME_ID` - Development theme ID

#### Staging Environment (Optional)

- `SHOPIFY_STAGING_STORE` - Staging store name
- `SHOPIFY_STAGING_THEME_ID` - Staging theme ID
- `SHOPIFY_STAGING_THEME_TOKEN` - Staging theme token

#### Production Environment

- `SHOPIFY_PROD_STORE` - Production store name
- `SHOPIFY_PROD_THEME_ID` - Production theme ID
- `SHOPIFY_PROD_THEME_TOKEN` - Production theme token

### Getting Theme Tokens

1. Install Shopify CLI: `npm install -g @shopify/cli`
2. Login to Shopify: `shopify auth login`
3. Generate theme token: `shopify theme token`

## 🔧 Setup Instructions

### 1. Repository Setup

```bash
# Clone the repository
git clone https://github.com/mohammed-fathy22/shopify-course.git
cd shopify-course

# Install dependencies
npm install

# Install Shopify CLI globally
npm install -g @shopify/cli@3.50.0
```

### 2. Environment Configuration

Create a `.env` file for local development:

```env
SHOPIFY_DEV_STORE=your-dev-store
SHOPIFY_DEV_THEME_ID=123456789
SHOPIFY_STAGING_STORE=your-staging-store
SHOPIFY_STAGING_THEME_ID=987654321
SHOPIFY_PROD_STORE=your-prod-store
SHOPIFY_PROD_THEME_ID=456789123
```

### 3. GitHub Secrets Configuration

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:

```
SHOPIFY_CLI_THEME_TOKEN=your-theme-token
SHOPIFY_DEV_STORE=your-dev-store
SHOPIFY_DEV_THEME_ID=123456789
SHOPIFY_STAGING_STORE=your-staging-store
SHOPIFY_STAGING_THEME_ID=987654321
SHOPIFY_STAGING_THEME_TOKEN=your-staging-token
SHOPIFY_PROD_STORE=your-prod-store
SHOPIFY_PROD_THEME_ID=456789123
SHOPIFY_PROD_THEME_TOKEN=your-prod-token
```

## 🎯 Workflow Triggers

### Automatic Deployments

- **Development**: Pushes to `develop` branch
- **Production**: Pushes to `main` branch

### Manual Deployments

1. Go to Actions tab in GitHub
2. Select "Shopify Theme CI/CD" workflow
3. Click "Run workflow"
4. Choose environment (development/staging/production)
5. Click "Run workflow"

## 📁 Project Structure

```
sw-shopify-course/
├── .github/
│   └── workflows/
│       └── theme-ci-cd.yml    # CI/CD pipeline
├── assets/
│   ├── rtl.css                # RTL support styles
│   └── rtl-support.js        # RTL detection script
├── locales/
│   └── ar.json               # Arabic translations
├── snippets/
│   └── rtl-detection.liquid  # RTL detection snippet
├── package.json              # Node.js dependencies
└── README.md                 # This file
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev                    # Start development server
npm run preview               # Preview theme

# Building
npm run build                 # Build all assets
npm run build:css            # Build CSS only
npm run build:js             # Build JS only

# Testing
npm test                      # Run all tests
npm run test:lint            # Run linting
npm run test:theme-check     # Run theme check

# Deployment
npm run deploy:dev           # Deploy to development
npm run deploy:staging       # Deploy to staging
npm run deploy:prod          # Deploy to production

# Pulling themes
npm run pull:dev             # Pull from development
npm run pull:staging         # Pull from staging
npm run pull:prod            # Pull from production
```

## 🔍 CI/CD Pipeline Steps

### 1. Lint and Validate

- Theme structure validation
- Liquid syntax checking
- JSON file validation
- Broken link detection
- File size checks

### 2. Build and Test

- Asset compilation
- Test execution
- Theme report generation

### 3. Deploy

- Environment-specific deployment
- Automatic backup (production)
- Preview URL generation

### 4. Notify

- Success/failure notifications
- Deployment status updates

## 🌍 RTL Support

The theme includes comprehensive RTL support for Arabic and other RTL languages:

- **Automatic Detection**: Detects RTL languages and applies appropriate styles
- **CSS Optimizations**: Consolidated RTL styles for better performance
- **Product Page Fixes**: Proper padding direction for RTL layouts
- **Icon Transformations**: Mirrored icons for RTL context

## 🚨 Troubleshooting

### Common Issues

1. **Authentication Errors**

   - Ensure theme tokens are valid and not expired
   - Check store names and theme IDs are correct

2. **Deployment Failures**

   - Verify all required secrets are set
   - Check theme permissions and access

3. **Build Errors**
   - Ensure Node.js version is 18+
   - Check for syntax errors in Liquid files

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Verify Shopify CLI version compatibility
- Ensure all environment variables are properly set

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test locally: `npm test`
5. Commit changes: `git commit -m 'Add new feature'`
6. Push to branch: `git push origin feature/new-feature`
7. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
