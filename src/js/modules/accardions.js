const accardions = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
    blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown')
    })

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style')
                })
                this.classList.add('active', 'active-style')
            }
        })
    })

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         this.classList.toggle('active-style');
    //         this.nextElementSibling.classList.toggle('active-content');

    //         if(this.classList.contains('active-style')) {
    //             this.nextElementSibling.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px';
    //         } else {
    //             this.nextElementSibling.maxHeight = '0px'
    //         }
    //     })
    // })

}
export default accardions;