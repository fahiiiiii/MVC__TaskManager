# Task Manager

A lightweight task management application built with vanilla JavaScript, utilizing browser local storage for data persistence and modern CSS for styling.

## Features

### Core Functionality
- Task creation with title and due date
- Task completion status management
- Task deletion
- Local storage persistence
- Responsive design

### Technical Implementation
- Pure HTML/CSS/JavaScript
- No external dependencies
- Local storage for data persistence
- Responsive layouts using CSS Flexbox
- CSS transitions for interface feedback

## Technical Specifications

### Color Scheme
```
Background: #121212
Primary: #1E90FF
Accent: #00C9A7
Secondary: #3A3A3A
Text: #EAEAEA
```

### Data Model
```javascript
{
    taskTitle: string,
    dueDate: string,
    id: string,
    completed: boolean
}
```

## Setup

### Requirements
- Modern web browser
- Web server (optional)

### Installation
1. Clone the repository
```bash
git clone https://github.com/fahiiiiii/MVC__TaskManager
```

2. Navigate to project directory
```bash
cd MVC__TaskManager
```

3. Deployment options:
   - Static deployment: Open `index.html` directly in a web browser
   - Server deployment: Host the files on any web server of your choice
   - Development: Use any local development server


## Implementation Details

### Storage Implementation
- Utilizes localStorage API
- Automatic state persistence
- JSON serialization for data storage

### UI Components
- CSS Flexbox layout system
- CSS transitions for state changes
- Media queries for responsive design

### Browser Compatibility
- Chrome
- Firefox
- Safari
- Edge

## Development

### Contributing
1. Fork repository
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Submit Pull Request

### Planned Features
- Task categorization
- Priority assignment
- Due date notifications
- Search functionality
- Task editing capabilities


## Repository
[https://github.com/fahiiiiii/MVC__TaskManager](https://github.com/yourusername/task-manager)