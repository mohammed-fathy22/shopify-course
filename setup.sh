#!/bin/bash

# Shopify Theme CI/CD Setup Script
# This script helps set up the CI/CD pipeline for your Shopify theme

echo "🚀 Setting up Shopify Theme CI/CD Pipeline"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install Shopify CLI globally
echo "🔧 Installing Shopify CLI..."
npm install -g @shopify/cli@3.50.0

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.template .env
    echo "⚠️  Please edit .env file with your actual Shopify store details"
else
    echo "✅ .env file already exists"
fi

# Check if git is initialized
if [ ! -d .git ]; then
    echo "🔧 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Shopify theme with CI/CD setup"
    echo "⚠️  Please add your GitHub remote: git remote add origin <your-repo-url>"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your Shopify store details"
echo "2. Set up GitHub secrets in your repository settings"
echo "3. Push to GitHub: git push -u origin main"
echo "4. Configure GitHub Actions secrets:"
echo "   - SHOPIFY_CLI_THEME_TOKEN"
echo "   - SHOPIFY_DEV_STORE"
echo "   - SHOPIFY_DEV_THEME_ID"
echo "   - SHOPIFY_PROD_STORE"
echo "   - SHOPIFY_PROD_THEME_ID"
echo "   - SHOPIFY_PROD_THEME_TOKEN"
echo ""
echo "📚 Read CI-CD-README.md for detailed instructions"
