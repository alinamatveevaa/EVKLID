document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__button').forEach(function(workBtn) {
        workBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.work__description').forEach(function(workDescr) {
                workDescr.classList.remove('work__description_active');
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('work__description_active');
        })
    })
})