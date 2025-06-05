const RENDER_WIDTH = 320;
const RENDER_HEIGHT = 240;
const TEXTURE_URL = 'https://cinemont.com/tutorials/zelda/water.png';
const FALLBACK_TEXTURE_SIZE = 64;
const FALLBACK_TEXTURE_DATA_URL = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = FALLBACK_TEXTURE_SIZE;
    const ctx_fallback = c.getContext('2d'); // Renamed to avoid conflict with main ctx
    const imgData = ctx_fallback.createImageData(FALLBACK_TEXTURE_SIZE, FALLBACK_TEXTURE_SIZE);
    for (let i = 0; i < imgData.data.length; i += 4) {
        const rand = Math.floor(Math.random() * 255);
        imgData.data[i] = rand; imgData.data[i+1] = rand; imgData.data[i+2] = rand;
        imgData.data[i+3] = 200 + Math.floor(Math.random() * 55);
    }
    ctx_fallback.putImageData(imgData, 0, 0);
    return c.toDataURL();
})();

// --- Canvas Setup ---
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d'); // This is the main canvas rendering context

canvas.width = RENDER_WIDTH;
canvas.height = RENDER_HEIGHT;

// --- Global Variables ---
let textureImage = new Image();
let textureData = null;
let textureWidth = 0;
let textureHeight = 0;
let startTime = 0;
let uTime = 0;

const uColor = { r: 0, g: 162, b: 255 };

// --- Ripple Effect Variables ---
let activeRipples = [];
const MAX_RIPPLES = 10;
const RIPPLE_DURATION = 3.0;
const RIPPLE_SPEED = 0.2;
const RIPPLE_WAVELENGTH = 30.0;
const RIPPLE_MAX_STRENGTH = 0.05;
const FOAM_SCALER = 1200;

// --- Texture Loading ---
textureImage.crossOrigin = "Anonymous";
textureImage.onload = function() {
    console.log('Texture loaded successfully from URL.');
    initTextureProcessing();
    if (!startTime) {
        startTime = performance.now();
        requestAnimationFrame(animate);
    }
};
textureImage.onerror = function() {
    console.warn(`Failed to load texture from ${TEXTURE_URL}. Using fallback texture.`);
    textureImage.onload = null;
    textureImage.src = FALLBACK_TEXTURE_DATA_URL;
    textureImage.onload = function() {
        console.log('Fallback texture loaded.');
        initTextureProcessing();
        if (!startTime) {
            startTime = performance.now();
            requestAnimationFrame(animate);
        }
    };
};
textureImage.src = TEXTURE_URL;

function initTextureProcessing() {
    textureWidth = textureImage.width;
    textureHeight = textureImage.height;

    if (textureWidth === 0 || textureHeight === 0) {
        console.error("Texture loaded with zero dimensions.");
        textureWidth = FALLBACK_TEXTURE_SIZE;
        textureHeight = FALLBACK_TEXTURE_SIZE;
    }

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = textureWidth;
    tempCanvas.height = textureHeight;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(textureImage, 0, 0, textureWidth, textureHeight);
    try {
        textureData = tempCtx.getImageData(0, 0, textureWidth, textureHeight);
    } catch (e) {
        console.error("Error getting texture data:", e);
        textureData = createManualFallbackTextureData();
        textureWidth = FALLBACK_TEXTURE_SIZE;
        textureHeight = FALLBACK_TEXTURE_SIZE;
    }
}

function createManualFallbackTextureData() {
    console.log("Creating manual fallback texture data.");
    // Use the main 'ctx' for creating ImageData if 'tempCtx' is out of scope or problematic
    const imgData = ctx.createImageData(FALLBACK_TEXTURE_SIZE, FALLBACK_TEXTURE_SIZE);
    for (let i = 0; i < imgData.data.length; i += 4) {
        const rand = Math.floor(Math.random() * 255);
        imgData.data[i] = rand; imgData.data[i+1] = rand; imgData.data[i+2] = rand; imgData.data[i+3] = 255;
    }
    return imgData;
}

function sampleTexture(u, v) {
    if (!textureData || textureWidth === 0 || textureHeight === 0) {
        return { r: 0, g: 0, b: 0, a: 255 };
    }
    let s = u - Math.floor(u);
    let t = v - Math.floor(v);
    const x = Math.floor(s * textureWidth);
    const y = Math.floor(t * textureHeight);
    const clampedX = Math.max(0, Math.min(textureWidth - 1, x));
    const clampedY = Math.max(0, Math.min(textureHeight - 1, y));
    const index = (clampedY * textureWidth + clampedX) * 4;
    return {
        r: textureData.data[index],
        g: textureData.data[index + 1],
        b: textureData.data[index + 2],
        a: textureData.data[index + 3]
    };
}

// --- Ripple Click Handler ---
canvas.addEventListener('click', function(event) {
    // Check if the click was on the canvas itself and not on an overlay element
    // This is a simple check; more robust solutions might be needed if overlays are complex
    if (event.target === canvas) {
        if (activeRipples.length >= MAX_RIPPLES) {
            activeRipples.shift();
        }
        const rect = canvas.getBoundingClientRect();
        const clickX = (event.clientX - rect.left) / rect.width;
        const clickY = (event.clientY - rect.top) / rect.height;

        activeRipples.push({
            x: clickX,
            y: clickY,
            startTime: uTime,
            strength: RIPPLE_MAX_STRENGTH
        });
    }
});

function animate(timestamp) {
    if (!textureData) {
        requestAnimationFrame(animate);
        return;
    }
    if (!startTime) startTime = timestamp;
    uTime = (timestamp - startTime) * 0.001;

    const mainCanvasImageData = ctx.createImageData(RENDER_WIDTH, RENDER_HEIGHT);

    activeRipples = activeRipples.filter(ripple => (uTime - ripple.startTime) < RIPPLE_DURATION);

    for (let cy = 0; cy < RENDER_HEIGHT; cy++) {
        for (let cx = 0; cx < RENDER_WIDTH; cx++) {
            const ndcX = cx / RENDER_WIDTH;
            const ndcY = cy / RENDER_HEIGHT;

            // Base water animation UV calculation
            let currentUV = {
                x: ndcX * 10.0 + uTime * -0.05,
                y: ndcY * 10.0 + uTime * -0.05
            };

            currentUV.y += 0.01 * (Math.sin(currentUV.x * 3.5 + uTime * 0.35) + Math.sin(currentUV.x * 4.8 + uTime * 1.05) + Math.sin(currentUV.x * 7.3 + uTime * 0.45)) / 3.0;
            currentUV.x += 0.12 * (Math.sin(currentUV.y * 4.0 + uTime * 0.5) + Math.sin(currentUV.y * 6.8 + uTime * 0.75) + Math.sin(currentUV.y * 11.3 + uTime * 0.2)) / 3.0;
            currentUV.y += 0.12 * (Math.sin(currentUV.x * 4.2 + uTime * 0.64) + Math.sin(currentUV.x * 6.3 + uTime * 1.65) + Math.sin(currentUV.x * 8.2 + uTime * 0.45)) / 3.0;

            let rippleDisplacementX = 0;
            let rippleDisplacementY = 0;
            let foamIntensity = 0;

            for (let i = 0; i < activeRipples.length; i++) {
                const ripple = activeRipples[i];
                const dx = ndcX - ripple.x;
                const dy = ndcY - ripple.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const rippleAge = uTime - ripple.startTime;
                const currentRippleRadius = rippleAge * RIPPLE_SPEED;

                if (distance < currentRippleRadius && rippleAge < RIPPLE_DURATION) {
                    const ageFactor = 1.0 - (rippleAge / RIPPLE_DURATION);
                    const distanceFactor = Math.max(0, 1.0 - (distance / currentRippleRadius));
                    const currentStrength = ripple.strength * ageFactor * distanceFactor * distanceFactor;
                    const rippleWave = Math.sin((distance - currentRippleRadius) * RIPPLE_WAVELENGTH) * currentStrength;

                    if (distance > 0.0001) {
                        rippleDisplacementX += (dx / distance) * rippleWave;
                        rippleDisplacementY += (dy / distance) * rippleWave;
                    }
                    foamIntensity += Math.max(0, rippleWave);
                }
            }
            currentUV.x += rippleDisplacementX;
            currentUV.y += rippleDisplacementY;

            const tex1 = sampleTexture(currentUV.x, currentUV.y);
            const tex2 = sampleTexture(currentUV.x + 0.2, currentUV.y + 0.2);

            let calculatedValue = (tex1.a * 0.9 - tex2.a * 0.02);

            let r = uColor.r + calculatedValue;
            let g = uColor.g + calculatedValue;
            let b = uColor.b + calculatedValue;

            const foamEffectAmount = foamIntensity * FOAM_SCALER;
            r += foamEffectAmount;
            g += foamEffectAmount;
            b += foamEffectAmount;

            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));

            const pixelIndex = (cy * RENDER_WIDTH + cx) * 4;
            mainCanvasImageData.data[pixelIndex] = r;
            mainCanvasImageData.data[pixelIndex + 1] = g;
            mainCanvasImageData.data[pixelIndex + 2] = b;
            mainCanvasImageData.data[pixelIndex + 3] = 255;
        }
    }
    ctx.putImageData(mainCanvasImageData, 0, 0);
    requestAnimationFrame(animate);
}

function resizeCanvas() {
    // CSS handles display scaling. Internal canvas resolution is fixed.
}


window.addEventListener('resize', resizeCanvas);

// --- Course List Population and Search ---
// Make sure 'coursesData' is loaded and available globally from your other JS file.


/**
 * Populates the course list in the DOM, optionally filtering by a search term.
 * @param {string} [searchTerm=''] - The term to filter courses by. Case-insensitive.
 */
function populateCourseList(searchTerm = '') {
    const courseListElement = document.getElementById('course-list');
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    if (courseListElement && typeof coursesData !== 'undefined' && Array.isArray(coursesData)) {
        courseListElement.innerHTML = ''; // Clear any existing items

        const filteredCourses = normalizedSearchTerm === ''
            ? coursesData // If no search term, show all courses
            : coursesData.filter(course => {
                const fullCourseText = `${course.courseSubject || ''} ${course.courseNumber || ''} ${course.courseTitle || ''} ${course.takeaway || ''}`.toLowerCase();
                return fullCourseText.includes(normalizedSearchTerm);
            });

        if (filteredCourses.length === 0 && normalizedSearchTerm !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = 'No courses match your search.';
            courseListElement.appendChild(listItem);
        } else {
            filteredCourses.forEach(course => {
                const listItem = document.createElement('li');
                listItem.textContent = `[${course.institution}] ${course.courseSubject} ${course.courseNumber} - ${course.courseTitle}`;
                courseListElement.appendChild(listItem);
            });
        }
    } else {
        if (!courseListElement) {
            console.warn('Element with id "course-list" not found. Cannot populate courses.');
        }
        if (typeof coursesData === 'undefined' || !Array.isArray(coursesData)) {
            console.warn('"coursesData" is not defined, not an array, or not loaded. Make sure it is globally accessible from a separate JS file included before this script.');
            if(courseListElement) courseListElement.innerHTML = '<li>Error: Course data not available.</li>'; // User feedback
        }
    }
}


        const projectsContainer = document.getElementById('projects-container');
        let articleContainer; // Will hold the articles specifically

        /**
         * Creates an anchor element.
         */
        function createLink(href, text) {
            const link = document.createElement('a');
            link.href = href;
            link.textContent = text;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            return link;
        }

        /**
         * Renders project articles into the article container.
         */
        function renderProjects(projects) {
            if (!articleContainer) return;
            articleContainer.replaceChildren(); // Clear only the articles

            if (projects.length === 0) {
                const noResults = document.createElement('p');
                noResults.textContent = 'No projects match the selected filters.';
                articleContainer.appendChild(noResults);
                return;
            }

            projects.forEach(project => {
                const article = document.createElement('article');
                const h3 = document.createElement('h3');
                h3.appendChild(createLink(project.url, project.title));

                const tagsContainer = document.createElement('div');
                tagsContainer.className = 'tags-container';
                project.tags.forEach(tagText => {
                    const tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = tagText;
                    tagsContainer.appendChild(tag);
                });

                const p = document.createElement('p');
                p.className = 'project-date';
                p.textContent = project.date;

                const ul = document.createElement('ul');
                project.description.forEach(descItem => {
                    const li = document.createElement('li');
                    li.textContent = descItem;
                    ul.appendChild(li);
                });

                if (project.links) {
                    const linksLi = document.createElement('li');
                    if (project.links.github) {
                        linksLi.append("The project's source code and a video demonstration are available on ", createLink(project.links.github, 'GitHub'), ".");
                    } else if (project.links.controller) {
                        linksLi.append("The project's source code for the ", createLink(project.links.controller, 'controller'), " and ", createLink(project.links.website, 'website'), ", along with a ", createLink(project.links.video, 'video demo'), ", are available.");
                    }
                    ul.appendChild(linksLi);
                }

                // New order: title, tags, date, description
                article.append(h3, tagsContainer, p, ul);
                articleContainer.appendChild(article);
            });
        }

        /**
         * Creates filter controls and handles filtering logic.
         */
        function initializeFilters() {
            projectsContainer.replaceChildren(); // Clear everything initially

            const allTags = [...new Set(projectsData.flatMap(p => p.tags))].sort();

            const mainHeader = document.createElement('h2');
            mainHeader.textContent = 'Completed Projects';

            const filterControls = document.createElement('div');
            filterControls.id = 'filter-controls';

            allTags.forEach(tag => {
                const label = document.createElement('label');
                label.className = 'filter-label';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'tag';
                checkbox.value = tag;

                const span = document.createElement('span');
                span.textContent = tag;

                label.append(checkbox, span);
                filterControls.appendChild(label);
            });

            // Create a dedicated container for the articles to be rendered into
            articleContainer = document.createElement('div');

            // Append new structure to the main container
            projectsContainer.append(mainHeader, filterControls, articleContainer);

            filterControls.addEventListener('change', () => {
                const selectedTags = Array.from(filterControls.querySelectorAll('input:checked')).map(cb => cb.value);

                if (selectedTags.length === 0) {
                    renderProjects(projectsData);
                } else {
                    const filteredProjects = projectsData.filter(project =>
                        selectedTags.some(tag => project.tags.includes(tag))
                    );
                    renderProjects(filteredProjects);
                }
            });
        }


// --- Initialize Search and Course List ---
document.addEventListener('DOMContentLoaded', () => {
    // Animation start is handled by texture.onload

    const searchInput = document.getElementById('site-search');
    const allTags = [...new Set(projectsData.flatMap(p => p.tags))];

    // Initial population of the course list

    initializeFilters();

    populateCourseList();
    renderProjects(projectsData); // Initial population of all projects


    // Add event listener for the search input
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            populateCourseList(event.target.value);
        });
    } else {
        console.warn('Search input with id "site-search" not found.');
    }
});