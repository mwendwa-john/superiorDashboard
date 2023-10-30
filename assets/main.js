document.addEventListener('DOMContentLoaded', function() {
    // start: Sidebar
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
