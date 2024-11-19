import { useEffect } from 'react';
import { gsap } from 'gsap';

function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        if (cursor) {
            gsap.set(cursor, { xPercent: -50, yPercent: -50 });

            const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
            const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

            const onMouseMove = (e) => {
                xTo(e.clientX);
                yTo(e.clientY);
                cursor.style.opacity = 1;
            };

            window.addEventListener("mousemove", onMouseMove);

            window.addEventListener("mousedown", function () {
                click.play();
            });
        
            window.addEventListener("mouseup", function () {
                click.reverse();
            });
        
            let click = gsap.to(".cursor", {
                paused: true,
                borderWidth: '4px',
                duration: 0.1
            });
        
            let hover = gsap.to(".cursor", {
                paused: true,
                scale: 0.5,
                duration: 0.1
            });

            const addHoverEffect = (elements) => {
                Array.from(elements).forEach(element => {
                    element.addEventListener("mouseenter", function () {
                        hover.play();
                    });
                    element.addEventListener("mouseleave", function () {
                        hover.reverse();
                    });
                });
            };

            addHoverEffect(document.querySelectorAll("a, button"));

        }
    }, []);

    return (
        <div className='cursor'></div>
    );
}

export default Cursor;