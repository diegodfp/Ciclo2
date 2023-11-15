function showSection(sectionId) {
    // Oculta todas las secciones
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Muestra la sección seleccionada
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Oculta todos los módulos al cambiar de sección principal
    var modules = document.querySelectorAll('.module-section');
    modules.forEach(function (module) {
        module.style.display = 'none';
    });
}

function showModule(moduleId) {
    // Oculta todos los módulos
    var modules = document.querySelectorAll('.module-section');
    modules.forEach(function (module) {
        module.style.display = 'none';
    });

    // Muestra el módulo seleccionado
    var selectedModule = document.getElementById(moduleId);
    if (selectedModule) {
        selectedModule.style.display = 'block';
    }
}

