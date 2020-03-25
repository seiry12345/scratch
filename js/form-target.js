function formLabelInteractive(selector) {
        const inputs = [...document.querySelectorAll(selector)];

        function toggleLableClass(e) {
            const target = e.target;
            const label = target.previousElementSibling;

            if (e.type === "focus") {
                if (target.value !== "") {
                    label.classList.add("active");
                } else {
                    label.classList.toggle("active");
                }
            } else if (e.type === "blur") {
                if (target.value === "") {
                    label.classList.remove("active");
                } else {
                    label.classList.add("active");
                }
            }
        }

        if (inputs) {
            ['blur', 'focus'].forEach(evt =>
                inputs.forEach(input => {
                    input.addEventListener(evt, function (e) {
                        toggleLableClass(e);
                    });
                })
            );
        }
    }

    formLabelInteractive('.js-animate-form input');
