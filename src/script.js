// Mein GitHub-Benutzername
const username = 'vincentstucki';

// API-Endpunkt
const apiUrl = `https://api.github.com/users/${username}/repos`;

async function fetchGitHubProjects() {
    try {
        const response = await fetch(apiUrl);
        const repos = await response.json();

        // Nur bestimmte Projekte anzeigen 
        const filteredRepos = repos.filter(repo => !repo.fork); // Nur eigene Projekte, keine geforkten

        const projectList = document.getElementById('project-list');

        filteredRepos.forEach(repo => {
            const projectElement = document.createElement('a'); 
            projectElement.classList.add('project');
            projectElement.href = repo.html_url;
            projectElement.target = "_blank"; 

            projectElement.innerHTML = `
             <h3>${repo.name}</h3>
             <p>${repo.description || ''}</p>
            `;

            projectList.appendChild(projectElement);
        });

    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
    }
}


fetchGitHubProjects();
