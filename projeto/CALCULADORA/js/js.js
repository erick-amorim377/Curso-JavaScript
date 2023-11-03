function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        
        inicia(){
        this.clickBnt();
        this.pressionaEnter();
        
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida');
                    return
                }
                this.display.value = String(conta);
            }
            catch(e){
                alert('conta invalida');
                return
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });
          },

        clickBnt(){
            document.addEventListener('click', e =>{
               const el = e.target;

               if(el.classList.contains('bnt-num')){
                this.btnParaDisplay(el.innerText);
               }

               if(el.classList.contains('bnt-clear')){
                this.clearDisplay();
               }
               if(el.classList.contains('bnt-del')){
                this.menosUm();
               }
               if(el.classList.contains('bnt-equ')){
                this.realizaConta();
               }
               this.display.focus();
               //quando você clica em algo, o "focus" fica na coisa que você clicou
               //. É só você mandar o foco para o display a cada botão clicado.
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        clearDisplay(){
            this.display.value = '';
        },

        menosUm(){
            this.display.value = this.display.value.slice(0, -1);
        },


    }
}
const calculadora = criaCalculadora();
calculadora.inicia();