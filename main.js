function Calculadora() {
    this.display = document.querySelector('.display')

    this.iniciar = () => {
        this.click()
        this.pressEnter()
    }

    this.click = () => {
        document.addEventListener('click', (e) => {
            let el = e.target;
            if (el.classList.contains('btn-num')) {
                this.display.value += el.innerText;
            }
            if (el.classList.contains('btn-clear')) {
                this.display.value = '';
            }
            if (el.classList.contains('btn-del')) {
                this.display.value = this.display.value.slice(0, -1);
            }
            if (el.classList.contains('btn-equal')) {
                this.equal();
            }
        })
    }
 
    this.pressEnter = () => {
        document.addEventListener('keypress', (e) => {
            if (e.keyCode == 13) {
                this.display.focus();
                this.equal();
            }
        })
    }

    this.equal = () => {
        try {
            this.display.value = eval(this.display.value);
            if (!this.display.value) {
                alert("conta invalida");
                return;
            }
        } catch (err) {
            alert("conta invalida");
            console.log(err)
        }
    }
};


const calculadora = new Calculadora;
calculadora.iniciar()
