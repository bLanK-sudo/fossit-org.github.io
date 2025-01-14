pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
        zIndex: 1
    });

    timeline.to(".page-transition", {
        duration: 1,
        width: "100%",
        left: "0%"
    });

    timeline.to(".page-transition", {
        duration: .8,
        width: "100%",
        left: "100%",
        delay: .3
    });

    timeline.set(".page-transition", {
        left: "-100%"
    });
}

mainAnimation = () => {
    var timeline = gsap.timeline();
    
    timeline.from(".home h1, .home h2, .summary, nav", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: .8
    });
}

delay = (n) => {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(()=> {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },

            async enter (data){
                mainAnimation();
            },

            async once(data){
                mainAnimation();
            }
        }
    ]
});