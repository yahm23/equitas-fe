export function modalControl() {
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const cards = document.querySelectorAll('[data-id]')

    cards.forEach(card=>{
        card.addEventListener('click', function(e){   
            const cardModal = document.getElementById(card.dataset.id);
            const closeButton = cardModal.querySelector('.closeButton');

            if (!cardModal.classList.contains('launchModal')){
                openModal(cardModal);
            }
            closeButton.addEventListener('click',()=>{
                closeModal(cardModal);
            })
        })
    })


    function openModal(card) {
        card.classList.add('launchModal')
        card.classList.remove('hidden')
        card.classList.add('cursorStandard')
        overlay.classList.remove('hidden')
        body.classList.add('modal-open')
    }

    function closeModal(card) {
        card.classList.remove('launchModal')
        card.classList.add('hidden')
        card.classList.remove('cursorStandard')
        overlay.classList.add('hidden')
        body.classList.remove('modal-open')
    }
    

  }
  