# replit.md

## Overview

This is an educational static website focused on manufacturing and industrial engineering concepts. The site serves as a learning resource created as a senior project, designed to introduce students to manufacturing topics including control panels, injection molding, CNC machining, and communication protocols. The website includes educational content, embedded YouTube videos, 3D model viewing capabilities, and links to external quizzes/surveys via Google Forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology**: Pure HTML, CSS, and vanilla JavaScript (no framework)
- **Design Pattern**: Multi-page static website with shared navigation component
- **Navigation**: Uses jQuery's `.load()` method to dynamically inject `nav.html` into each page, providing consistent navigation across all pages
- **Styling**: Single `style.css` file with fixed background image, responsive viewport settings

### Page Structure
- `index.html` - Homepage with site introduction and guide
- `about.html` - Engineering design process and automation planning content
- `content.html` - Educational content with embedded videos (Control Panels, Injection Molding, CNC, Protocols)
- `manufacturing.html` - Manufacturing-focused content page
- `quizzes.html` - Links to external Google Forms for entrance/exit quizzes and surveys
- `downloads.html` - 3D model viewer for GLTF files
- `nav.html` - Reusable navigation component with dropdown menu

### JavaScript Functionality
- **Scroll-based footer visibility**: Footer appears when user scrolls to bottom of page
- **3D Model Loading**: Uses Three.js GLTFLoader for loading 3D models
- **Model Viewer**: Google's `<model-viewer>` web component for interactive 3D model display

### Key Design Decisions
1. **jQuery for template loading** - Chose jQuery's `.load()` for simple navigation reuse across pages without a build system
2. **Static site approach** - No backend required; content is purely educational and read-only
3. **External quiz hosting** - Quizzes hosted on Google Forms rather than built into the site, simplifying data collection

## External Dependencies

### CDN Libraries
- **jQuery 1.10.2** - DOM manipulation and navigation loading (`https://code.jquery.com/jquery-1.10.2.js`)
- **Three.js 0.160.0** - 3D graphics library for model rendering (`https://cdn.jsdelivr.net/npm/three@0.160.0/`)
- **Google Model Viewer** - Web component for 3D model display (`https://unpkg.com/@google/model-viewer/`)

### External Services
- **Google Forms** - Hosts entrance quiz, exit quiz, and exit survey
- **YouTube** - Embedded educational videos on content page

### Assets
- **3D Model**: `660cylinderReduced.gltf` - Local GLTF file for 3D model viewer
- **External Images**: Background images and educational graphics loaded from external URLs (ftcdn.net, sanity.io, midstatemold.com, slashgear.com)

### No Backend/Database
- This is a purely static website with no server-side processing or database requirements
- All dynamic functionality is client-side JavaScript