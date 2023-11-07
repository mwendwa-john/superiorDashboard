document.addEventListener('DOMContentLoaded', function() {
    // start: Sidebar
    // start: change active class on click
    // const navLinkEls = document.querySelectorAll('.sidebar-menu-item');

    // navLinkEls.forEach(navLinkEl => {
    //     navLinkEl.addEventListener('click', () => {
    //         navLinkEl.classList.add('active');
    //     });
    // });
    // start: change active class on click

    var dropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu');
    dropdownMenus.forEach(function(menu) {
        menu.style.display = 'none';
    });

    var dropdownLinks = document.querySelectorAll('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a');
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var parent = this.parentNode;
            if (!parent.classList.contains('focused')) {
                var allMenus = parent.parentNode.querySelectorAll('.sidebar-dropdown-menu');
                allMenus.forEach(function(menu) {
                    menu.style.display = 'none';
                });

                var allDropdowns = parent.parentNode.querySelectorAll('.has-dropdown');
                allDropdowns.forEach(function(dropdown) {
                    dropdown.classList.remove('focused');
                });
            }

            var nextElement = this.nextElementSibling;
            nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
            parent.classList.toggle('focused');
        });
    });

    // start: sidebar toggle
    var sidebarToggle = document.querySelector('.sidebar-toggle');
    sidebarToggle.addEventListener('click', function() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');

        if (sidebar.classList.contains('collapsed')) {
            sidebar.addEventListener('mouseleave', function() {
                var dropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu');
                dropdownMenus.forEach(function(menu) {
                    menu.style.display = 'none';
                });

                var dropdowns = document.querySelectorAll('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown');
                dropdowns.forEach(function(dropdown) {
                    dropdown.classList.remove('focused');
                });
            });
        }
    });

    var sidebarToggleDash = document.getElementById('sidebarToggle');
    sidebarToggleDash.addEventListener('click', function() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');

        if (sidebar.classList.contains('collapsed')) {
            sidebar.addEventListener('mouseleave', function() {
                var dropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu');
                dropdownMenus.forEach(function(menu) {
                    menu.style.display = 'none';
                });

                var dropdowns = document.querySelectorAll('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown');
                dropdowns.forEach(function(dropdown) {
                    dropdown.classList.remove('focused');
                });
            });
        }
    });
    // end: sidebar toggle

    // start: sidebar cancel on sm
    var sidebarClose = document.getElementById('sidebarClose');
    sidebarClose.addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.add('smCollapsed');
    });
    var sidebarOpen = document.getElementById('sidebarToggleSm');
    sidebarOpen.addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.add('smExpanded');
    });
    // end: sidebar cancel on sm

    var sidebarOverlay = document.querySelector('.sidebar-overlay');
    sidebarOverlay.addEventListener('click', function() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('collapsed');

        var dropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu');
        dropdownMenus.forEach(function(menu) {
            menu.style.display = 'none';
        });

        var dropdowns = document.querySelectorAll('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown');
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('focused');
        });
    });

    if (window.innerWidth < 768) {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('collapsed');
    }
    // end: Sidebar


    

});
