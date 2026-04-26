# Tree Serum Bio Organic International

A complete website for Tree Serum Bio Organic International, showcasing bio-organic biostimulants and crop-specific solutions for advanced agriculture.

## GitHub Pages Deployment

This repository is configured for automatic GitHub Pages deployment using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Automatic Deployment:**
   - The GitHub Actions workflow will automatically deploy the website when you push to the main branch
   - The workflow renames `treeserum_website-1.html` to `index.html` for proper URL structure

3. **Access Your Website:**
   - Once deployment is complete, your site will be available at: `https://krishakfarma.github.io/tree-serum-bio-organic/`

### Workflow Details

- **Trigger:** Push to main branch
- **Deployment Branch:** Automatically managed by GitHub Actions
- **File Processing:** Renames HTML file to index.html during deployment
- **Permissions:** Configured for Pages deployment

### Files Structure

```
├── treeserum_website-1.html    # Main website file
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
└── README.md                  # This file
```

### Manual Deployment (if needed)

If you need to manually deploy or troubleshoot:

1. The workflow creates a `dist` folder with the processed files
2. Uses GitHub's official Pages deployment actions
3. Includes proper permissions for automatic deployment

### Support

For issues with deployment:
- Check the Actions tab in your GitHub repository for workflow status
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow has proper permissions

---

**Tree Serum Bio Organic International**  
Quality, Service and Solution is everything for us.  
गुणवत्ता, सेवा आणि समाधान हेच आमच्यासाठी सर्वकाही आहे.
