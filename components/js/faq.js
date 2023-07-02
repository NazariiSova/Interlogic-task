function toggleAnswer(id) {
            var answer = document.getElementById("answer" + id);
            var plus = document.getElementById("plus" + id);

            if (answer.style.display === "block") {
                answer.style.display = "none";
                plus.style.visibility = "visible";
            } else {
                answer.style.display = "block";
                plus.style.visibility = "hidden";
            }
        }