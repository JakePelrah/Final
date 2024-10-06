import { useEffect, useRef, useState } from 'react'
import { useGame } from './GameProvider'
import './rocket.css'

export default function Rocket({ imgPath, variation = 0 }) {
    const { setRockets } = useGame()
    const flamesRef = useRef(null)
    const launchIdRef = useRef(null)
    const rocketRef = useRef(null)

    useEffect(() => {
        flamesRef.current.style.visibility = 'hidden'
        setRockets(prevState=>[...prevState, {variation, launch}])
    }, [])


    function launch() {

        if (variation === 1 || true) {
            rocketRef.current.classList.add('launched')
            flamesRef.current.style.visibility = ''

            launchIdRef.current = setInterval(() => {
                flamesRef.current
                    .querySelectorAll('path')
                    .forEach(d =>
                        d.style.filter = `brightness(${Math.random() * 1.5})`)
            }, 10)
        }

    }

    

    function abort() {
        clearInterval(launchIdRef.current)
    }

    return (
        <div ref={rocketRef} className="rocket">

            {variation === 0 ?
                <svg width="32.006mm" height="70.08mm" version="1.1" viewBox="0 0 32.006 70.08" xmlns="http://www.w3.org/2000/svg">
                    <g ref={flamesRef} class="flames" >
                        <path d="m30.609 54.918c0 2.7577-2.6705 6.0357-2.6705 6.0357s-2.6705-3.2779-2.6705-6.0357c0-2.758 1.1956-3.9514 2.6705-3.9514s2.6705 1.1934 2.6705 3.9514" fill="#f79d5d" />
                        <path d="m29.924 53.905c0 2.0515-1.9861 4.4895-1.9861 4.4895s-1.9861-2.438-1.9861-4.4895c0-2.0511 0.889-2.939 1.9861-2.939s1.9861 0.88787 1.9861 2.939" fill="#f0706e" />
                        <path d="m29.538 53.334c0 1.6527-1.6002 3.617-1.6002 3.617s-1.6002-1.9643-1.6002-3.617c0-1.6528 0.71649-2.3679 1.6002-2.3679 0.88371 0 1.6002 0.71508 1.6002 2.3679" fill="#f03f76" />
                        <path d="m27.938 60.954v-2.5586s1.9861-2.438 1.9861-4.4895c0-2.0471-0.88582-2.9354-1.9798-2.939 0.13511 4.23e-4 0.2667 0.01446 0.39405 0.04205 1.2629 0.20105 2.2384 1.3698 2.2694 3.7908v0.0029 0.0102 0.0052c0 0.0032 0 0.0061 3.52e-4 0.0092v0.0067 0.0077 0.0074 0.0077 0.0084 0.0067c3.53e-4 0.0029 3.53e-4 0.0061 3.53e-4 0.0092v0.0064 0.01019 0.0049 0.01545c0 2.6741-2.5114 5.8375-2.6635 6.0266-0.0046 0.0059-0.0071 0.0091-0.0071 0.0091" fill="#df8e55" />
                        <path d="m27.938 58.395v-1.4436s1.6002-1.9643 1.6002-3.617c0-1.6492-0.71367-2.3651-1.5949-2.3679h0.0011c1.094 0.0036 1.9798 0.89186 1.9798 2.939 0 2.0515-1.9861 4.4895-1.9861 4.4895" fill="#d86664" />
                        <path d="m27.938 56.951v-5.9848h0.0053c0.88124 0.0028 1.5949 0.71864 1.5949 2.3679 0 1.6527-1.6002 3.617-1.6002 3.617" fill="#d83b6c" />
                        <path d="m20.916 58.975c0 5.0741-4.9131 11.105-4.9131 11.105s-4.9133-6.0307-4.9133-11.105c0-5.0744 2.1997-7.2704 4.9133-7.2704 2.7136 0 4.9131 2.196 4.9131 7.2704" fill="#f79d5d" />
                        <path d="m19.658 57.112c0 3.7741-3.6544 8.2596-3.6544 8.2596s-3.6548-4.4855-3.6548-8.2596c0-3.7744 1.6362-5.4078 3.6548-5.4078 2.0182 0 3.6544 1.6334 3.6544 5.4078" fill="#f0706e" />
                        <path d="m18.947 56.061c0 3.0411-2.9443 6.6548-2.9443 6.6548s-2.9446-3.6138-2.9446-6.6548c0-3.0405 1.3183-4.3568 2.9446-4.3568 1.626 0 2.9443 1.3163 2.9443 4.3568" fill="#f03f76" />
                        <path d="m1.3972 54.918c0 2.7577 2.6705 6.0357 2.6705 6.0357s2.6705-3.2779 2.6705-6.0357c0-2.758-1.1956-3.9514-2.6705-3.9514-1.4749 0-2.6705 1.1934-2.6705 3.9514" fill="#f79d5d" />
                        <path d="m2.0814 53.905c0 2.0515 1.9863 4.4895 1.9863 4.4895s1.9863-2.438 1.9863-4.4895c0-2.0511-0.88935-2.939-1.9863-2.939-1.0971 0-1.9863 0.88787-1.9863 2.939" fill="#f0706e" />
                        <path d="m2.4674 53.334c0 1.6527 1.6003 3.617 1.6003 3.617s1.6003-1.9643 1.6003-3.617c0-1.6528-0.71646-2.3679-1.6003-2.3679-0.88388 0-1.6003 0.71508-1.6003 2.3679" fill="#f03f76" />
                        <path d="m4.0677 60.954v-2.5586s1.9863-2.438 1.9863-4.4895c0-2.0471-0.88593-2.9354-1.98-2.939 0.13494 4.23e-4 0.26666 0.01446 0.39398 0.04205 1.263 0.20105 2.2386 1.3698 2.2694 3.7908 0 6.7e-4 0 0.0022 1.058e-4 0.0029v0.0102c0 0.0018 1.412e-4 0.0038 1.412e-4 0.0052v0.0092c1.411e-4 2e-3 1.411e-4 0.0043 1.411e-4 0.0067v0.0077c0 0.0025 1.411e-4 5e-3 1.411e-4 0.0074v0.0077 0.0084c1.411e-4 0.0022 1.411e-4 0.0043 1.411e-4 0.0067v0.0092 0.0064 0.01019 0.0049c1.411e-4 0.0053 1.411e-4 0.01023 1.411e-4 0.01545 0 2.6741-2.5114 5.8375-2.6633 6.0266-0.00483 0.0059-0.00716 0.0091-0.00716 0.0091" fill="#df8e55" />
                        <path d="m4.0677 58.395v-1.4436s1.6003-1.9643 1.6003-3.617c0-1.6492-0.71367-2.3651-1.5951-2.3679h0.00109c1.094 0.0036 1.98 0.89186 1.98 2.939 0 2.0515-1.9863 4.4895-1.9863 4.4895" fill="#d86664" />
                        <path d="m4.0677 56.951v-5.9848h0.00522c0.88142 0.0028 1.5951 0.71864 1.5951 2.3679 0 1.6527-1.6003 3.617-1.6003 3.617" fill="#d83b6c" />
                        <path d="m16.003 70.08v-4.7078s3.6544-4.4855 3.6544-8.2596c0-1.6299-0.30515-2.8604-0.81421-3.7328h0.5902-0.0046c0.91652 1.1815 1.4873 3.0142 1.4873 5.5954 0 4.9104-4.6016 10.717-4.8983 11.086-0.0099 0.01242-0.01482 0.01873-0.01482 0.01873" fill="#df8e55" />
                        <path d="m16.003 65.372v-2.6557s2.9443-3.6138 2.9443-6.6548c0-1.1217-0.17956-2.009-0.48754-2.6818h0.38347c0.50906 0.87242 0.81421 2.1029 0.81421 3.7328 0 3.7741-3.6544 8.2596-3.6544 8.2596" fill="#d86664" />
                        <path d="m16.003 62.716v-9.3366h2.4567c0.30798 0.67275 0.48754 1.5601 0.48754 2.6818 0 3.0411-2.9443 6.6548-2.9443 6.6548" fill="#d83b6c" />
                    </g>

                    <g transform="translate(0 .90001)">
                        <path d="m30.609 54.918v-0.01545 0.01545m0-0.02039v-0.01019 0.01019m0-0.01655c0-0.0032 0-0.0063-3.53e-4 -0.0092 3.53e-4 0.0029 3.53e-4 0.0061 3.53e-4 0.0092m-3.53e-4 -0.01598v-0.0084 0.0084m0-0.01612v-0.0074 0.0074m0-0.01517v-0.0067 0.0067m-3.52e-4 -0.01598v-0.0052 0.0052m0-0.01542v-0.0029 0.0029m-2.6635-3.8358h-0.0011 0.0011" fill="#e9eaea" />
                        <path d="m16.003 48.288c-4.3452 0-7.8677-3.5225-7.8677-7.8676v-33.552c0-1.2418 0.58639-2.4109 1.5819-3.1531l3.9339-2.9344c1.3952-1.0403 3.3084-1.0403 4.7036 0l3.9342 2.9344c0.99519 0.74224 1.5819 1.9114 1.5819 3.1531v33.552c0 4.3452-3.5225 7.8676-7.8676 7.8676" fill="#bec0bb" />
                        <path d="m19.927 53.379h-7.8482v-7.4877c0-2.1671 1.7568-3.9243 3.9243-3.9243 2.1671 0 3.9239 1.7572 3.9239 3.9243v7.4877" fill="#5b7288" />
                        <path d="m12.079 48.998h7.8482v-0.89352h-7.8482z" fill="#bec0bb" />
                        <path d="m12.079 46.968h7.8482v-0.89352h-7.8482z" fill="#bec0bb" />
                        <path d="m8.1354 30.086h15.735v-0.89366h-15.735z" fill="#5b7288" />
                        <path d="m9.1706 34.993h13.665v-3.2074h-13.665z" fill="#adadab" />
                        <path d="m8.1354 26.891h15.735v-0.89366h-15.735z" fill="#5b7288" />
                        <path d="m8.1354 15.69h15.735v-0.89393h-15.735z" fill="#5b7288" />
                        <path d="m32.006 50.362h-8.1351v-38.984l8.1351 38.984" fill="#2e7096" />
                        <path d="m30.752 52h-5.6268v-1.6389h5.6268v1.6389" fill="#364753" />
                        <path d="m6.7382 54.918c0-0.0052 0-0.0102-1.411e-4 -0.01545 1.411e-4 0.0053 1.411e-4 0.01023 1.411e-4 0.01545m-1.411e-4 -0.02039v-0.01019 0.01019m0-0.01655v-0.0092 0.0092m-1.411e-4 -0.01598v-0.0084 0.0084m0-0.01612c0-0.0025-1.411e-4 -5e-3 -1.411e-4 -0.0074 0 0.0025 1.411e-4 0.0052 1.411e-4 0.0074m-1.411e-4 -0.01517c0-0.0025 0-0.0047-1.411e-4 -0.0067 1.411e-4 2e-3 1.411e-4 0.0043 1.411e-4 0.0067m-1.411e-4 -0.01598c0-0.0014-1.412e-4 -0.0035-1.412e-4 -0.0052 0 0.0018 1.412e-4 0.0036 1.412e-4 0.0052m-1.412e-4 -0.01542c-1.058e-4 -7.05e-4 -1.058e-4 -0.0022-1.058e-4 -0.0029 0 0.0011 0 0.0018 1.058e-4 0.0029m-2.6635-3.8358h-0.00109 0.00109" fill="#e9eaea" />
                        <path d="m2.0034e-6 50.362h8.1354v-38.984z" fill="#2e7096" />
                        <path d="m1.2544 52h5.6265v-1.6389h-5.6265v1.6389" fill="#364753" />
                        <path d="m23.87 40.54v-3.52e-4 3.52e-4m3.53e-4 -0.03351v-0.0021 0.0021m3.52e-4 -0.01588v-0.0032 0.0032m0-0.03457v-0.0042 0.0042m3.53e-4 -0.01588v-0.0042 0.0042m0-33.572c0-1.2418-0.58667-2.4109-1.5819-3.1531l-3.9342-2.9344c-0.69744-0.51999-1.5247-0.78034-2.3516-0.78034 0.82691 0 1.6542 0.26035 2.3516 0.78034l3.9342 2.9341c0.99519 0.7426 1.5819 1.9117 1.5819 3.1535" fill="#e9eaea" />
                        <path d="m19.927 47.241v-1.349c0-2.1671-1.7568-3.9243-3.9239-3.9243v-6.9748h6.8322v-3.2075h-6.8322v-1.6997h7.8676v10.335 0.01552 0.0042c0 0.0039 0 0.0078-3.53e-4 0.01164v0.0042 0.0314 0.0032c0 0.0046 0 0.0092-3.52e-4 0.01376v0.0021c0 0.01094 0 0.02187-3.53e-4 0.03316v3.52e-4c-0.04269 2.8642-1.62 5.352-3.9426 6.6929v0.0081m3.9437-18.049h-7.8676v-2.3008h7.8676v2.3008m0-3.1944h-7.8676v-5.2645c2.8773 0 5.2444-2.2239 5.4723-5.0433h2.3954v10.308m0-11.202h-2.3954c-0.2286-2.819-2.5954-5.0432-5.4723-5.0432v-9.7525c0.82691 0 1.6542 0.26035 2.3516 0.78034l3.9342 2.9344c0.99519 0.74224 1.5819 1.9114 1.5819 3.1531v7.928" fill="#aaadaa" />
                        <path d="m19.927 53.379h-3.9239v-4.3815h3.9239v4.3815m0-5.2751h-3.9239v-1.1359h3.9239v1.1359m0-2.0295h-3.9239v-4.1074c2.1671 0 3.9239 1.7572 3.9239 3.9243v0.18309" fill="#51667c" />
                        <path d="m16.003 48.998h3.9238v-0.89352h-3.9238z" fill="#aaadaa" />
                        <path d="m16.003 46.968h3.9238v-0.89352h-3.9238z" fill="#aaadaa" />
                        <path d="m16.003 30.086h7.8676v-0.89366h-7.8676z" fill="#51667c" />
                        <path d="m16.003 34.993h6.8322v-3.2074h-6.8322z" fill="#9a9b9b" />
                        <path d="m16.003 26.891h7.8676v-0.89366h-7.8676z" fill="#51667c" />
                        <path d="m23.871 15.69h-2.3954c0.01199-0.14746 0.01799-0.29633 0.01799-0.44662 0-0.15064-6e-3 -0.29951-0.01799-0.44732h2.3954v0.89394" fill="#51667c" />
                        <path d="m16.003 20.733c-3.0275 0-5.4906-2.4624-5.4906-5.4899 0-3.0272 2.4631-5.4906 5.4906-5.4906 3.0272 0 5.4903 2.4634 5.4903 5.4906 0 3.0275-2.4631 5.4899-5.4903 5.4899" fill="#364753" />
                        <path d="m20.496 15.243c0 2.4814-2.0115 4.4933-4.493 4.4933s-4.4933-2.0119-4.4933-4.4933 2.0119-4.493 4.4933-4.493 4.493 2.0115 4.493 4.493" fill="#25323a" />
                        <path d="m13.884 15.04c-0.66005 0-1.1949-0.53481-1.1949-1.1949s0.53481-1.1952 1.1949-1.1952c0.66005 0 1.1952 0.53516 1.1952 1.1952s-0.53516 1.1949-1.1952 1.1949" fill="#415d6c" />
                    </g>
                </svg>
                :
                <svg width="48.78mm" height="70.08mm" version="1.1" viewBox="0 0 48.78 70.08" xmlns="http://www.w3.org/2000/svg">
                    <g ref={flamesRef} class="flames" transform="translate(.15555 -.15555)" >
                        <path d="m6.4014e-6 45.827c0 2.48 2.4014 5.4271 2.4014 5.4271s2.401-2.9471 2.401-5.4271-1.0749-3.5532-2.401-3.5532c-1.3264 0-2.4014 1.0732-2.4014 3.5532" fill="#f79d5d" />
                        <path d="m0.61525 44.917c0 1.8447 1.7861 4.0368 1.7861 4.0368s1.7861-2.1922 1.7861-4.0368c0-1.8443-0.79975-2.6427-1.7861-2.6427-0.98672 0-1.7861 0.79834-1.7861 2.6427" fill="#f0706e" />
                        <path d="m0.96238 44.403c0 1.4859 1.439 3.2523 1.439 3.2523s1.439-1.7664 1.439-3.2523c0-1.4863-0.64452-2.1294-1.439-2.1294-0.79481 0-1.439 0.64311-1.439 2.1294" fill="#f03f76" />
                        <path d="m48.78 45.827c0 2.48-2.4014 5.4271-2.4014 5.4271s-2.401-2.9471-2.401-5.4271 1.0749-3.5532 2.401-3.5532c1.3264 0 2.4014 1.0732 2.4014 3.5532" fill="#f79d5d" />
                        <path d="m48.164 44.917c0 1.8447-1.7861 4.0368-1.7861 4.0368s-1.7861-2.1922-1.7861-4.0368c0-1.8443 0.79975-2.6427 1.7861-2.6427 0.98672 0 1.7861 0.79834 1.7861 2.6427" fill="#f0706e" />
                        <path d="m47.817 44.403c0 1.4859-1.439 3.2523-1.439 3.2523s-1.439-1.7664-1.439-3.2523c0-1.4863 0.64417-2.1294 1.439-2.1294 0.79481 0 1.439 0.64311 1.439 2.1294" fill="#f03f76" />
                        <path d="m48.78 45.827v-0.01376 0.01376m0-0.0187v-0.0092 0.0092m0-0.01482v-0.0081 0.0081m0-0.01411v-0.0074 0.0074m-3.53e-4 -0.01446v-0.0064 0.0064m0-0.01411v-0.0056 0.0056m0-0.01411v-0.0042 0.0042m-3.52e-4 -0.01376v-0.0028 0.0028m-2.3947-3.4491h-6e-3 6e-3" fill="#e9eaea" />
                        <path d="m46.378 51.254v-2.3008s1.7861-2.1922 1.7861-4.0368c0-1.8408-0.79657-2.6395-1.7801-2.6427 0.12136 3.53e-4 0.23954 0.0127 0.35419 0.03775 1.1356 0.18098 2.013 1.2319 2.0405 3.4085v0.0028c0 0.0032 3.52e-4 0.0063 3.52e-4 0.0095v0.0042 0.0085 0.0056 0.0078 0.0064c3.53e-4 0.0025 3.53e-4 0.0046 3.53e-4 0.0071v0.0074 6e-3 0.0081 0.0056 0.0092 0.0049 0.01376c0 2.48-2.4014 5.4271-2.4014 5.4271" fill="#df8e55" />
                        <path d="m46.378 48.954v-1.2979s1.439-1.7664 1.439-3.2523c0-1.4863-0.64417-2.1294-1.439-2.1294h6e-3c0.98354 0.0032 1.7801 0.80186 1.7801 2.6427 0 1.8447-1.7861 4.0368-1.7861 4.0368" fill="#d86664" />
                        <path d="m46.378 47.656v-5.3816c0.79481 0 1.439 0.64311 1.439 2.1294 0 1.4859-1.439 3.2523-1.439 3.2523" fill="#d83b6c" />
                        <path d="m4.8024 45.827v-0.01376 0.01376m0-0.01905v-0.0085 0.0085m0-0.01482v-0.0074 0.0074m0-0.01411v-0.0071 0.0071m0-0.01446v-0.0056 0.0056m-3.528e-4 -0.01411v-0.0046 0.0046m0-0.01411v-0.0028 0.0028m0-0.01376v-0.0011 0.0011m-2.395-3.4488h-0.00564 0.00564" fill="#e9eaea" />
                        <path d="m2.4014 51.254v-2.3008s1.7861-2.1922 1.7861-4.0368c0-1.8408-0.79657-2.6395-1.7805-2.6427 0.12136 3.53e-4 0.23954 0.0127 0.35419 0.03775 1.1359 0.18098 2.0133 1.2323 2.0408 3.41v0.0011 0.01094 0.0028 0.0095 0.0046c0 0.0028 3.528e-4 0.0056 3.528e-4 0.0085v0.0056 0.0074 0.0071 0.0067 0.0074 0.0063 0.0085 0.0053 0.01376c0 2.48-2.401 5.4271-2.401 5.4271" fill="#df8e55" />
                        <path d="m2.4014 48.954v-1.2979s1.439-1.7664 1.439-3.2523c0-1.4863-0.64452-2.1294-1.439-2.1294h0.00564c0.9839 0.0032 1.7805 0.80186 1.7805 2.6427 0 1.8447-1.7861 4.0368-1.7861 4.0368" fill="#d86664" />
                        <path d="m2.4014 47.656v-5.3816c0.79446 0 1.439 0.64311 1.439 2.1294 0 1.4859-1.439 3.2523-1.439 3.2523" fill="#d83b6c" />
                        <path d="m30.386 56.528c0 6.1923-5.9962 13.552-5.9962 13.552s-5.9958-7.3596-5.9958-13.552c0-6.192 2.6846-8.872 5.9958-8.872 3.3115 0 5.9962 2.6801 5.9962 8.872" fill="#f79d5d" />
                        <path d="m28.849 54.255c0 4.6059-4.4598 10.08-4.4598 10.08s-4.4598-5.4741-4.4598-10.08 1.9967-6.5991 4.4598-6.5991c2.4631 0 4.4598 1.9932 4.4598 6.5991" fill="#f0706e" />
                        <path d="m27.983 52.972c0 3.7109-3.5934 8.1213-3.5934 8.1213s-3.593-4.4104-3.593-8.1213c0-3.7109 1.6087-5.3167 3.593-5.3167 1.9847 0 3.5934 1.6058 3.5934 5.3167" fill="#f03f76" />
                        <path d="m24.39 70.08v-5.745s4.4598-5.4741 4.4598-10.08c0-2.0951-0.4131-3.6495-1.0954-4.7219h0.68827-0.01235c1.1328 1.354 1.8708 3.4685 1.9487 6.4618 0.0046 0.17462 0.0071 0.35242 0.0071 0.53305 0 3.0921-1.4954 6.4756-2.9923 9.0879-1.5007 2.619-3.0039 4.464-3.0039 4.464" fill="#df8e55" />
                        <path d="m24.39 64.335v-3.241s3.5934-4.4104 3.5934-8.1213c0-1.4637-0.25047-2.6-0.67557-3.4396h0.44662c0.68227 1.0724 1.0954 2.6268 1.0954 4.7219 0 4.6059-4.4598 10.08-4.4598 10.08" fill="#d86664" />
                        <path d="m24.39 61.094v-11.561h2.9178c0.4251 0.83961 0.67557 1.9759 0.67557 3.4396 0 3.7109-3.5934 8.1213-3.5934 8.1213" fill="#d83b6c" />
                    </g>
                    <g>
                        <path d="m32.423 46.741h-16.068v-22.223c0-5.7302 1.1285-11.404 3.3207-16.698l2.6741-6.4572c0.75248-1.8165 3.326-1.8165 4.0781 0l2.6744 6.4572c2.1922 5.2941 3.3203 10.968 3.3203 16.698v22.223" fill="#bec0bb" />
                        <path d="m48.78 41.688h-4.8024v-6.5334c0-1.3264 1.0749-2.4014 2.401-2.4014 1.3264 0 2.4014 1.0749 2.4014 2.4014v6.5334" fill="#bec0bb" />
                        <path d="m16.356 31.449h16.068v-0.9124h-16.068z" fill="#5b7288" />
                        <path d="m17.602 38.023h13.576v-5.2702h-13.576z" fill="#adadab" />
                        <path d="m18.394 49.533h11.992v-2.7919h-11.992z" fill="#364753" />
                        <path d="m43.977 39.986h-11.554v-11.141l11.554 7.3067v3.834" fill="#2e7096" />
                        <path d="m32.424 28.845v1.6916l11.553 7.3067v-1.6916l-11.553-7.3067" fill="#3c91ad" />
                        <path d="m4.8024 39.986h11.553v-11.141l-11.553 7.3067v3.834" fill="#2e7096" />
                        <path d="m48.164 42.861h-3.5722v-1.173h3.5722v1.173" fill="#364753" />
                        <path d="m48.776 38.023h-4.7988v-0.91264h4.7988v0.91264" fill="#5b7288" />
                        <path d="m48.776 39.986h-4.7988v-0.91264h4.7988v0.91264" fill="#5b7288" />
                        <path d="m6.4014e-6 41.688h4.8024v-6.5334c0-1.3264-1.0749-2.4014-2.401-2.4014-1.3264 0-2.4014 1.0749-2.4014 2.4014v6.5334" fill="#bec0bb" />
                        <path d="m0.61525 42.861h3.5719v-1.173h-3.5719v1.173" fill="#364753" />
                        <path d="m0.0035342 38.023h4.7988v-0.91264h-4.7988v0.91264" fill="#5b7288" />
                        <path d="m0.0035342 39.986h4.7988v-0.91264h-4.7988v0.91264" fill="#5b7288" />
                        <path d="m32.423 46.741h-8.0338v-8.7178h6.7882v-5.2701h-6.7882v-1.3042h8.0338v15.292m0-16.204h-8.0338v-5.7616c3.0275 0 5.4906-2.4624 5.4906-5.4899s-2.4631-5.491-5.4906-5.491v-13.794c0.38241 0 0.76447 0.095956 1.1024 0.28787 0.29104 0.1651 0.54928 0.40181 0.74648 0.70944 0.07197 0.11218 0.13582 0.23389 0.19015 0.36513l2.6744 6.4572c2.1922 5.2941 3.3203 10.968 3.3203 16.698v6.0187" fill="#aaadaa" />
                        <path d="m24.39 31.449h8.0338v-0.9124h-8.0338z" fill="#51667c" />
                        <path d="m24.39 38.023h6.7882v-5.2702h-6.7882z" fill="#9a9b9b" />
                        <path d="m30.386 49.533h-5.9962v-2.7919h5.9962v2.7919" fill="#31404b" />
                        <path d="m32.423 39.986v-11.141l3.53e-4 1.6916v9.4492" fill="#2a6488" />
                        <path d="m16.356 28.845v1.6916l-11.553 7.3064v-1.6912l11.553-7.3067" fill="#3c91ad" />
                        <path d="m24.39 24.775c-3.0272 0-5.4903-2.4624-5.4903-5.4899s2.4631-5.491 5.4903-5.491c3.0275 0 5.4906 2.4634 5.4906 5.491s-2.4631 5.4899-5.4906 5.4899" fill="#364753" />
                        <path d="m28.883 19.285c0 2.4814-2.0119 4.493-4.4933 4.493s-4.493-2.0115-4.493-4.493 2.0115-4.493 4.493-4.493 4.4933 2.0115 4.4933 4.493" fill="#25323a" />
                        <path d="m22.271 19.082c-0.66005 0-1.1949-0.53516-1.1949-1.1952 0-0.66005 0.53481-1.1949 1.1949-1.1949s1.1949 0.53481 1.1949 1.1949c0 0.66005-0.53481 1.1952-1.1949 1.1952" fill="#415d6c" />
                    </g>
                </svg>

            }

        </div>)
}