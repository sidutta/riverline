import React, { Component } from 'react';
import './mainPage.scss'
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import Particles from 'react-particles-js';
import Navbar from '../navbar/navbar';
class MainPage extends Component {
  
  state={
    navbarClass:null
  }
  
  componentDidMount =() => {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll= (event) => {
    const scrollY = window.scrollY
    if(scrollY >= 200)
    {
      this.setState({ navbarClass:'sticky'  })
    } else if(scrollY < 200)
    {
      this.setState({ navbarClass: null  })
    }
    
}

scrollToTop= () => {
  window.scrollTo(0, 0)
}

  render(){
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const testimonialSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const blogsSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>

       <section className='landing-page'>
       <Particles className='pos-abs-particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 140
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
            <div className='main'>
                <div className={this.state.navbarClass}>
                    <Navbar navbarType='nonSticky'/>
                </div>
                <div className='tagline-div'>
                  <p>
                  Customized Development Solutions, a click away!
                  </p>
                  <p>
                  Software Experts, Innovative Solutions
                  </p>

                  <div>
                  <div className="gradient-box">
                  <p><a href="mailto:info@riverlinetechnologies.com">get in touch</a></p>
                  </div>
                  </div>
                </div>
                <div className='social-media-icon-bar'>
                 
                </div>
            </div>
       </section>

       <section className='about-us' id='about-us'>
          <div className='about-us-bg'>
            <div className='container'>
              <div className='width-adjustment'>
                  <p className='heading'>
                  about us
                </p>
                <div>
                  <p className='about-us-para'>
                  Ideofuzion (Pvt.) Ltd. is a leading Blockchain and technological Solutions Provider. We have a core focus in Blockchain Development, IT Solutions development, Software development, Mobile Applications and emerging technologies AI and IoT. Experts in Smart Contract Development, Hyperledger Fabric, ICO development, ERC-20 tokens, DApps, Alt Coins, Stellar and Tron we have a solution for your idea whether it is on iOS, Android, Web App or Desktop applications. Started in 2013, Ideofuzion (Pvt.) Ltd. has more than 5 years experience in developing Blockchain Technologies serving clients in the Supply Chain, Fintech, Health Care and Manufacturing sectors. A Blockchain progressive organization we are always on the lookout for exciting projects to work with as is testified by our 50+ successful Blockchain Projects serving a global clientele spread across 6 continents.
                  </p>
                </div>
                <div className='factors-of-sucess-div'>
                  <p className='factors-of-sucess-p'>
                  Factors of success
                  </p>
                  <div className='factors-of-sucess-icons-div'>
                      <ul>
                        <li>
                        <svg id="_1_inspire" data-name=" 1 inspire" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 172.88 176.72"><defs><style></style></defs><title>1 inspire</title><circle class="cls-11" cx="86.44" cy="86.44" r="83.94"/><g id="Ellipse_1_copy" data-name="Ellipse 1 copy"><image class="cls-22" width="166" height="166" transform="translate(4 10.72)"
                         href="data:image/png;base64,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"/><circle class="cls-33" cx="86.41" cy="86.44" r="67.5"/></g><g id="Inspire" class="cls-44"><text class="cls-55" transform="translate(56.76 124.32)">Inspi</text><text class="cls-66" transform="translate(91.59 124.32)">r</text><text class="cls-55" transform="translate(97.24 124.32)">e</text></g><path d="M85.69,81.1H80.6c-1.69,0-2.27-.54-2.36-2a22.27,22.27,0,0,0-3.31-9.94,12.22,12.22,0,0,1,3.22-15.64,12.42,12.42,0,0,1,16,.6A12.24,12.24,0,0,1,96.3,69.67a18.4,18.4,0,0,0-2.92,9.18,2,2,0,0,1-1.7,2.26,2.08,2.08,0,0,1-.61,0C89.27,81.16,87.48,81.1,85.69,81.1ZM85.77,80h5.09c1,0,1.37-.4,1.41-1.33A20,20,0,0,1,95.4,69a11.05,11.05,0,0,0-2.21-14.23,11.21,11.21,0,0,0-14.43-.31A11.09,11.09,0,0,0,75.9,68.57a23.36,23.36,0,0,1,3.44,10.2c.06,1,.55,1.26,1.48,1.23C82.47,80,84.12,80,85.77,80Z"/><path d="M86.81,49.91H84.52V38.75h2.29Z"/><path d="M91.4,86.28c-.18,1.26-.65,1.51-1.47,1.28-2.9-.81-5.79-1.65-8.69-2.45-1.06-.29-1.14-1-.94-1.87s1-.63,1.58-.45c2.67.75,5.36,1.46,8,2.29C90.46,85.26,90.9,85.87,91.4,86.28Z"/>
                        <path d="M91.16,88.85c0,1.3-.32,1.87-1.37,1.58C87,89.65,84.16,88.9,81.38,88a2.09,2.09,0,0,1-1.1-1.28c-.25-.79,0-1.44,1.08-1.13,3,.85,6,1.67,9,2.55C90.7,88.28,91,88.71,91.16,88.85Z"/><path d="M78.3,52.22l-1.56,1.25L69.28,46l1.51-1.42Z"/><path d="M63.55,59.7H73l-.37,2.35H63.55Z"/><path d="M100.78,44.79l1.24,1-7.48,7.42-1.24-1Z"/><path d="M107.79,59.73v2.43H99.16c-.23,0-.22,0-.32-.31a15.83,15.83,0,0,1-.23-2.06Z"/><path d="M70.91,77.46,69.39,75.9l5.39-5.36c1.36,1.62,1.36,1.61-.23,3.21C73.36,75,72.19,76.16,70.91,77.46Z"/><path d="M100.32,77.26c-1.4-1.44-2.95-3-4.34-4.46-1-1.16.16-1.55.59-2.16L102,75.91Z"/><path d="M87.8,90.62c-2.08,0-4.17,0-6.25,0-1.27,0-1.46-.53-1-2.34l7.33,2.07Z"/><path d="M83.33,82.43h6.74c1.08,0,1.14.8,1.07,1.59-.09,1-.8.66-1.35.51l-6.47-1.79Z"/><path d="M88.06,91.41c-.06,1.75-1.3,1.53-2.33,1.55s-2.22.13-2.34-1.55Z"/></svg>
                        </li>
                        <li>
                          <svg id="_2_innovate" data-name=" 2 innovate" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 172.84 176.5"><defs></defs><title>2 innovate</title><ellipse class="cls-11" cx="86.42" cy="86.25" rx="83.92" ry="83.75"/><g id="Ellipse_1_copy" data-name="Ellipse 1 copy"><image class="cls-22" width="166" height="166" transform="translate(4.08 10.5)" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACmCAYAAABQiPR3AAAACXBIWXMAAAsSAAALEgHS3X78AAAYhklEQVR4Xu2d63LjOLKEU7I93T0zu+//nHt2p213Wzo/pLKSyawCdLMpGRlRAYi6gcTHrAIlW6vtdouhoaVp3XrA0NBn6LH1gK+s1Wq1aj3mXG1HyrJajeOy0xEQ9j7OqetgD1i/MJgFiLq993GVsoOs2+3jviKoXwbMBETedmxfxfdVB5XvO7a/2/AFJu2uwTQwOshObUMVrJkjntpq/24hvTswj4BR+73bQC2r5ZgMmfZ7t4HaSf/eAL0bMAVI7WfAuVh3PAbUslbogzKLTcdjHKST97wHSG8ezATIFohr6a+TfgWqvo/KwZOByK3rt6DV99l1bnhyb/Y6ZgFkBaICqPGQbM8ABbVOGZQKH8dbsl2h1ddSbeMY3SKgN+eYnUA6B1ToHmhb1VdAe+FsOaWC+NbRd+BWbgpqbwrQmwGzA8jMDRU4jcfG7cxBTwEzc8iI38Vt7jtgK0gR7a3AuXgwTwDSgfhIrfY1HJwt58zUckoH4e9GvEnfAcqgOkgXD+iiwSQoW0AqjBl8T9Q+yTbtK6A9KZ3loHBgKmy/pP8r6TtgM0hvDtBFLn6MS2o4d2SYFEAXf8htBZMBVTgdlDxmTp8OTHVKDgXxNelrZJCuME3zrO1qtVotEc7FgZm4pKsf2R3Z8Rx8f5hwcCqgDHyrznTK3DLgZLdUIBnGVmSQqosypO8nzxJX74sCU6B0DumAVBA5vkmrfQW0SucK5Ro7tVI5MHWsDEyGU13yBQcIXyhepZ9BukbbQRflnosAM0nd6pIZkApiKxTOeA0tARTKaHlsLo2HNJ0zDG+Yw5k5poPyOekrpI/IAQ0oZ+65BDg/HcwOl3QpO4PxO7XfzTYFs+WWbuGTpXHu88S20rnWmgwop2uF7zkJhjWe+0Cv6wCduGdMyWcC+qlgJlBq2lYgnzCHMeKH6TOU7JpaX/L7HAOlc8uQWwT1wKmLH4aT4XsG8NO0f9DjXrDbp3iN9f71Yx8W6Z6fAmZH6maX1JTtYNRQSHuhfMBpULZSebQ9cLrFkHNNdsmfFN/lttu/X5gCyrXnIurODwfTrLpdLal1pDpkAPintNF3jqkLnpZLPmB+wqjDhyowo8+AbqTlmtOldl0IMZw/sdvXnwD+wfREzPb3BfOT7Q0HfTqcHwpmo57UWpJBUnf8Mwl1Ta0rWy7pHJInD0Xr5FwzWgXUOWiW2hnOgDL29x/MweQ6mvdZswAD+ql154eB2agnXerOHDLir304MDWFVy65xhRKhZED1Go/kzpntBoKaVZ7vmK3bwHm9yKy/c9OxF84iOvODXb7+mHu+SFgdkDJqZtX2grkXyYUTHVKXXVXKdsBCdOGjgWTb2eQqnsGpAHmH9gBFMfpFfOFIAPpjoOemG7fwzk3+/s+FM6rg9kJJS9wNG0HfH8B+Fva2M4p3NVXLoVlNaSON+QgPAVM3RZAct+l+EccHDTAfMUUUk3fVU39CF+66EkJfAKcVwWzgNLVk84lwxUZyL9pe+WULnX1pGyYltUDI4sfHxPptnG7xtxBH3Bwz0fs3PMJOzDjpK6iqq8dmKwVdu87gRNX1NXA7ITSpe6ATWHkyKB0DuHqqR4YLwFg9RjetjUtcICUHfQBO0j4xOasw9lHt7VSucsawO4kAATO1Wp1tcXQ1cDcqxfK75jWigzhvzCHMsDkS0K86j7mwDMsGYznQJqJJ5TH4yCNNqCIYxmAKqRxfBlYvb86Nu7k/I3DyRHjwLVS+lXA3LulQhkHk6HkepLTdgAZ0YLyWJeEaUM9UF1C7n0Cwri/clAG1MUjtQqkhjtpK0U6B65Ub14cTErhQB+UWkv+y0SAqelboawOduYE7vZnicfBkOpj+IQPQBVSBbMCMjt5Q1Hvqt4vKV0azouC2agr4wBp+laX/De1nMoVSq0nj3FJ7S9R746E6fhj8h9wcK41tRp8XCowMyhVWwo9kS6mi4K5FwPJB4dXjpG+o54MZ/w3DmCyW/IlIXZKTlHxPjxRtwikSic/9ivSOkOyoftbkPZAySWERihcE5dcDF0MzKSujAPBK0WuKdUpOXQF7pxS60kdwy0D6RRARp+38XYGzgGqJ28GZRWgNq4aXGwxdBEwO+rKSOHslFxTKpRaV/KFc13kuDMfpr0Xxf5oKgUODsr7nkXLKTU2yfZ4/Pu4LgHn2WB2fLKjl4V4Bc4pW90yHqOf5rjLHdmZf29QshygK8zdswpIH5hCpx+Naiig74shnKmzwdxLgVzjANATplCGW2Z1pTpl1JTslAE9n/kw7VdQwKj77DJIBibgHbIV+pwYy9kp/SwwO1bh7iK6fprjFjruklDLKUNfCcoQw8VzEpeS4rY7XvG8DMq3pJ+l9vexnAPnyWAKlNG6ulLdsnUBPbtOqSvK7Mz/ygrHijZqzrivpQrMN+ln7glcIKWfDOZe7JIBZYDpoHSf7vRAqel7QJmL4QwxoE4ZkNl3Qn9jCmqAGW2M4eSUfhKYZhWubhn1oFvw/C3BQGZQZpeDQO3QQe/pFNPjs8ZcLh0rmArlb7lfAZ2kdJygk8DciwFRtwwo+RtDGZTOKd3loAHl8crck9WCksHkPwFWSLO0flKteTSYZsHDabyCkiNzyuzLGAPK09WCswWm/s2R9tU9GcwN9u9/LJxHgdmAkmtLvZiu9eVftN19olN9mgNqh/rk4ORMp2Bynalgxh/E8e3MOXnOuqEEjgRzLwUluzwUTngMlOySY/V9WSmcWUqvoHyllv9XUrUgivc9aiHUDWZjweM+4eEv/3ItWX11rXWdckB5nhTOmMMtdse+B8zqH3nF4+P5AfvRrtkN5l7qlJlbRhrnVB6AtqB0KRzUDp2ndwfD7jhvUMMZgKpTvshtds83HEqE9zoT6HfNLjATt1xhvhKv0njPJaGx0Pk4sXtyWt9gNycb7OYng1L/y5xL6wz9Ua7ZBeZex7glp/EsfetlIU3hoQHl5aUpPbbxYqhyTAXzGVPXZOcMVz7KNY8BM9RyS03jPyTclzKqFfjQdaRw8rxGWn+CB/MZu7nVf3/4bX//E850TV2ZzdTxtTa+RKRgKpyRvkdduQw5x+zJhjq3sb31iV23mmDuxaC4gfPHj3z9kgGN9N1agYeO2pGhs6SZirNhlRFdJmzN7wqArltmKsE0i541tTxwdUwGlGvKGHg8b6Twz5fLiDrHmWtyq2uHDE6gY457HLMacCuNM6S82CnPJnQMfOiiUgOKeXaZUefawZmlc4azdM0eMAEP5gPmg41QILmufMJI4UsVz7HOtZqQzrOb62oNUc5zCqah2Q00s3mXvs8a6NDVpdlqTaEZsjIhne+TFkEtx1RwnL27gXIbZ1CVwkNdgx66utx8c4aMxa6GpvKAkyGfzHmWzltgAvNBVnWHRnbmDLdcptQ1HZxZSm9lyAfM5zyd9x4wgSmcPMCAUgfKTulWaG5gA85liKHMMmWWLXne3QKoO51bMDsvqiuY2cBiscODy+AcWp7UlHjudf7d3Mfj03TuVDlmBicPzrnmKQMbcC5PzpQqY1JAtYRLF7yuzmyl8swxuRDugdINDNQOLUtqGhmcPa5ZzX+8/kwzMJNV0lpC7VwBzRY8MTCYdmh50qzpXJOd88lElTHTuW+lcg1eYekZkw0os/GhZcsZSMDpGKig1DVGk4EMTB1M62xxg1G3dKAP3YaUAYXTOadykNWYKwCzTN1yzGhbA4pB9UDJGnAuX84xHQtsTGpUwUJWZ85UgQnMHfNBooJS7btrQEOL0sq0joeWQalRBXf6+u+agJl8Pq6Dcelcw9UU+rpDt6WeDPokreNBs6dlIXNMfaIbSAZn5ZTDMW9TLcfMmGhlzpSFY1N5ls7dAFuDGIDeltRcHKCP0ndwplByxnZgurPjGDgrpxww3oeYBZfSK7fs4qJK5dyvBqIDaLnlgPO2pPOVmVWLi9ItVRmYwPzNK8dcww8i2qH70IraDErX5yidMlSBGeo9M6o3bw5k6Gak2c+x0QMkQz7TO5jFpSLu9wyCHzN0P3JAcl/nvgUmqNW+hacHSK0nq1qCXy9kz5Khm5PO8VraLECtVY+rVW/OcPI2B+SA8b6kkCkfx0A5Y6MC072os+ueAQ3dhyrDyUBtQWnV45ihDMCqhuDnDt2XHJzRz1jo5qIHTPdGDsYWnPFaQ/cjB54DcSX9pjIwe19EIXRnROs1hpavnjnsdkO53z6uxzEBf1b0nB1DQ05NPnrBHBr6UPWCyf8Bdiuhj9HtQ0OqJh8ZmFtpMymg+vgB6X2oZw7d3FcqGetxTHXILea/Gbg1t90btgY7dFtyWVNv6/YuBnrADGUAOkj1zbsGM3RTcgBGP2Ohm4sKTPcGG2o5HLAZpEO3qwq2rek7Drp46HFMB6dG9rPAbgeG7kMZiJVBZXDO2HBgVm/YArJyUNaA9D7kTOtUOCd6B9P8UlX2hgplBaeDcug2xfPozMsxkvHg4Jxw0pPKgT443U8C6+AHpLcvB2gGYwWmg/Ndpyx+FEQFsuWaA87blRqNzvdb0q8Ateq5wN6C8re0OoiNvObQbUnnLTOrHtNqAhnKFj/a6lmQQckD2WI6GH7NodtWBST/LHSWURXuGRetGtOdHS0oHaDuzQektyUHU8aEAsqmlsLIC/AqlbsBZGcHx0lnyNCitaXWAXkOD1YTMJMfN++Bkn88XQezxXQwQ7cphrOHhwxOhdIyccyqPBvIr6TvBgNMBzJAXbZ0zjLHrKDMnFNfd6Jja0ytJWIQv6TfOlMGkLcjhbIyKA0HZFf2bF0uir6zboXyF4BX2p4Nil936DZ0CpS9BrUFMCsjZ2DSA/TJPCgd0CsOUPYOKjQAXaa2pu3lgFlgDs52TBYPyJ0pr/AD6rHyAeWyxVBq1uwxp4yB5vy3wMwcMwamaVwBrVxzaLnSjKbmVDllNv+ZW1oWWqty7jOc1aBe0G/lfEYOLUstU8oy5gv11TVdjWkvU1owkzozc8wYjAs+czLXHFAuS5VbhimpMemcM5RVKZeqlcqB+eBcKndw8lnkXDMGyO8ztAypq7kUzg6ZzX3LlFK1wFTndGcND+4Z+SCzAXYNdOhD5NySjaTKlDz3WY2pc57Oewpmkc61ztAz55mCB1mt0EID0M9X5Za6ruD5diWc1pczx0w+Bm86ZigGWA1UocwGWxbC1A59rDK3rIxI5/uZ7q+yJNCY5x4w+YUyW3du+QzgJ+bOmblmae1DV1WWHV36rqCsTMg6ZqYSTEnn0VaOGQP+iQOU1YBHSl+OMijfkGdGN8/VgncCZZbGgd0vWPVKB66DZii/4zDo7/v4hulvWetPsPCgV/t+89/VDZ0tNYSsZKugVDjdpaKtRKleMNUxIzKL/4kczD+Q/yIrD3hAeX3xvHJwXanGo/PLgFaO2e2WQAeY2+12S78B5ByT4XzGDsAY/D/IHVNdc7N/jwAVGK75EVIoXammZdo/+4i+pvIsjYPaUk0wSXp2ZYVxDP7bPr5TPxyT07lzzXivkdKvJwaEM6EaTgYlw/kTU7eMNG4Xty23BDrBNK65wQ4WtxNP2MFXgam/ac1gupQ+4LyselO4lmcKZYCp9WWZxnvUBSaJdyi7nMA78g3A/3AAMtwywi2C3vbvwVcMBpyXk4MyK81aUDKYvOhpXatuqhvMRq0ZO/OAHXAv2A04YGTHDEd1v3GuPzoQ27YYcF5CGZQtgwkI/0fBafwZ84vqR18iYnWDSWq55gt2rxsAZuHSOS98sO9vcLicNOA8XS0oYw51reCgjNDV+EXcEjgSzA7XfMC01ozI0nhWY3I4KAecx2lrWp67N/gFLEP5X/S7pXXMXrcEjgSTpK4ZCyFO6c84OKcGQ+nSudNI66dJoQxY3GUhhjLAVCgVzli1q1ueDCVwApiNFfpvHAB7xAHOAPRRQqF0zskacB6nFpRagsXqmlP3fyVaULo0frSOBpPEb+jgfMEOOoWxAjMgc1CGBpx9akEZl3T4WqVL3wql1pbVShzA8W4JnAgmuaam9DfswOEdDvgek361Ks+U1Z5DO/G8cCiU/OWbSN8M5P9hDqVeImrWlqfoJDABm9J5xwMcjgfMYcwWPi2tcXBpYMDJOhZKXug4KBnODEp1S0R7ilsCZ4BJ4lQBHMDkelOdMXPJFpi80w9yHzv4VwSUAVAg3SUhTd8KZYTWlr2Xh06GEjgTzEZKZ9DUPV30QBnvE1DGc0Ps4F8Jzq1pFUqtKdkpHZAMpkvh/NHjhoLn6WSdBSaAnpTuIqspM5gmZ6Jp4zUDyK/inplLOqfUbwplUP5nHwqmu5juasqz3RK4AJikGEikdGAOo+tXTumA5Ijxh2vy69yzeyqQ0QaQWxyArKCM9M1AOijZLVtfazsbSuBCYDZSOjB3xWMcUl3A9R/2bQB/z+6pULpjxPWk+5iRV9/qlAymXrMMpwy3nNWWl4ASuBCYwAzODQ4rZ2AOZcspAX/ANWK7XhMF5q99y4DqZMcxib4el3Az9zGjuyRUQekWPOyUF6srWRcDE4CrNwNMds6WMnd8S9o/cIAzXPMB85IhdEuA9gDJYLJLZqvvrK7MFjz6WfhVVuGqi4JJ4gFu4NVK43zQOW28mdsBpwIarXNoBjRuL0EORm2dS+rKO4NSU7gGX0ivLg3F/AC4LJTAFcA09Saw24lj60o+4Bx81r5J/wkHOPUzeAV0i+mY9MB+JKhuUhVEd3zccXml0PSdXUBXlwwowy2rL2hcrK5kXRxMoIQT2O3g5OGmdW6gE+DiGw6AZl8SYUC38JACHpZLwJpNIm/PoNTjErCwS/InOvGFDP1SRoAYfXZJ55TpYgdX0lXABCycnNIVTiA/+OyKMQHa/sABTv2Dt+zLIpmDMqShCtZTpa+VwajHxZ2kmrorKPXLGe4z8ACcoZw5JYCLp/DQ1cAEuuBUl2hNxC8Tr3L72/613d8WtQCF6QMeVr6/kps43e9oW0DyiRpAOij1+5QOTAWSv8bWTN/A9aAErgwm0ITz/WF0v5sQngidEO6/YvdXma+Y/o1R5Z6u/nRwMoSnOGgGY7QOxiptRwRI4ZIMpYLJwUByPamrb5u+rwkl8AFgAimcDOP7QynUMTVtcbxQ/ED9t+wM6BrtFO+cNG73SqF0QG4w3W92Sa6j9UTk1K1QBpjcRmQu+alOGfoQMAELJ3Bwz8oxHJhucji+Y/4fQDI4q++FVpByW6nHHSsgK5d0UCqYGuyQWer+VCiBDwQTaML5/jAKBjOrrbS++hM7ICvnzGrPLMW3ANW+OmS0vUDyvrb217klw/lTwgHpXPLToAQ+GEyghFMnzk1aq+j/c9/+wG4S2DX1b9urP4xTQDM4Nb2r3D45KBVI55I9UKprxn3OIdklf2M6Dh3vh0IJfAKYgIVzi93Ea2rPUrpOFhf/P3BwS03p6pzx9+2Ze/YukhycFZRuv3T/uJ6O9M3BUGrLMAaQfKwYyIBSnRLRfjSUwCeBCVg4NzhMcDaZbgJj0n7gMGHslgGl1pua2ntqzwpQVQtItz+9dfQzpvv6jDmIPUAuJnWrPg1M4LDjCaAZmBvMJ5FdU0F0qbyqORnObPXu4FS1XDJaTd1ZTalpnF2Tt7l0rXVktcD5dCiBTwYzlNSdwOGgrTGd5Cytx6QEfBoKpYLZck5Xezo4K7fU1O1qZ1eqaCrXYIDjuQx7BuQiUrdqEWACMzi3mE94NsHOOaN+dCAqlJVr9qT1Fpit9N0LJoOn/cwdMyAX6ZKs1YLG8i76TidPOK+OI7Vy8CKGQVMAMyD5uQplldKPATNL4VV9qe2r2a4w9jjk4lyStUgwgQmcwDxlqmspoBwOVrdNn1c5ZrQralUMgUKZOaarM6vQVM1AqlOrQ75P/NKgBBYMZkjcM1oGIoOUFzCtUJfU1kGpjol9y05UOWYFp0KqfXXG3/L6NwtkaPFgAtY9o1VAo2WIXMrvaSunZCjX2ElTOTB1zApOdTsHnt7Pzlil68WnbaebADOUpHfuZy6qsGbQtmCMPr+HOjowBUGBYYgUrt7g5+t7pEACtwElcGNghjoAzZw0g7XqZ7GSUCkgmmI1FDjXcmTOeNNAhm4SzFAjxbuoYM3gVXd0UPaAySApXFno/RWMMO3NARm6aTBDBaDRtmJt+hmIfBvSZykwDiqFbWPuy2B07/GuWwUydBdghgRQIIeU+6eGvp6Tg+ic0NeM27vOHU3mXYEZKgDlfi+02W1ute/AcYBWt91zQpNJuycgQ3cJJstACuRAVdC6VvuqFqBVW/XvEkbW3YOp6gBVb1cQVlCG9AB3gWdu3z2MrC8HpioBFfDQ9YDYkjvgdhK+EoiqLw+mqgDVqeex3Qf4K4OoGmB26khgSw0A2xpgDi1S69YDhoY+Q/8P5LDpx87/8F8AAAAASUVORK5CYII="/><circle class="cls-33" cx="86.42" cy="86.25" r="67.5"/></g><text id="Innovate" class="cls-44" transform="translate(55.6 123.26)">Inn<tspan class="cls-55" x="22.41" y="0">ov</tspan><tspan x="39.18" y="0">ate</tspan></text><path d="M91.38,45.92h-.59V44A.9.9,0,1,0,89,44v1.88H87.23V42.67a.9.9,0,1,0-1.79,0v3.25H83.67V44a.9.9,0,1,0-1.79,0v1.88h-.59a.9.9,0,0,0-.9.9v.58H78.51a.9.9,0,0,0,0,1.8h1.88V51H77.14a.9.9,0,0,0,0,1.8h3.25v1.76H78.51a.9.9,0,0,0,0,1.8h1.88v.59a.89.89,0,0,0,.9.89h.59v1.88a.9.9,0,1,0,1.79,0V57.8h1.77v3.26a.9.9,0,1,0,1.79,0V57.8H89v1.88a.9.9,0,1,0,1.79,0V57.8h.59a.9.9,0,0,0,.9-.89v-.59h1.88a.9.9,0,1,0,0-1.8H92.28V52.76h3.25a.9.9,0,1,0,0-1.8H92.28V49.2h1.88a.9.9,0,1,0,0-1.8H92.28v-.58a.9.9,0,0,0-.9-.9ZM90.48,56H82.19V47.72h8.29Zm0,0" transform="translate(0.08)"/><path d="M103.77,54.15a2.86,2.86,0,1,0,0-1.79h-3c0-.26,0-.53,0-.8a16.58,16.58,0,0,0-.41-3.7h6.21a.89.89,0,0,0,.83-.89V43.81a2.86,2.86,0,1,0-1.8,0v2.25H99.8a13.72,13.72,0,0,0-1.73-3.31.9.9,0,1,0-1.47,1A13.41,13.41,0,0,1,99,51.56a15.75,15.75,0,0,1-.08,1.58v0A12.76,12.76,0,0,1,96.69,59l0,0c-.42.64-.86,1.25-1.32,1.87a17.42,17.42,0,0,0-3.47,6.66h-11A17.56,17.56,0,0,0,77.36,61c-.47-.63-.92-1.25-1.35-1.89v0a12.65,12.65,0,0,1-2.19-5.86v0a13,13,0,0,1-.08-1.57,14.33,14.33,0,0,1,.62-4.26.65.65,0,0,0,0-.13,12.29,12.29,0,0,1,3.09-5,12.42,12.42,0,0,1,8.85-3.57h0a12.14,12.14,0,0,1,4.48.79A.9.9,0,0,0,92,38.83a.89.89,0,0,0-.52-1.15,14,14,0,0,0-5.14-.91,14.25,14.25,0,0,0-10.12,4.09,13.9,13.9,0,0,0-3.35,5.2H67.1V43.81a2.86,2.86,0,1,0-1.8,0V47a.91.91,0,0,0,.9.9h6.14a16.45,16.45,0,0,0-.41,3.7c0,.27,0,.54,0,.8h-3a2.87,2.87,0,1,0,0,1.79h3.21a13.63,13.63,0,0,0,1.54,4.5H66.2a.91.91,0,0,0-.9.9v3.16a2.86,2.86,0,1,0,1.8,0V60.45h7.68c.37.54.75,1,1.13,1.56a15.49,15.49,0,0,1,3.21,6.22,2.91,2.91,0,0,0-.31,4.31,2.92,2.92,0,0,0,1.41,4.85v1.83a3.55,3.55,0,0,0,3.55,3.55h5.15a3.55,3.55,0,0,0,3.54-3.55V77.39a2.92,2.92,0,0,0,1.41-4.85,2.91,2.91,0,0,0-.31-4.31A15.51,15.51,0,0,1,96.78,62c.37-.51.75-1,1.12-1.56h7.68v2.26a2.86,2.86,0,1,0,1.8,0V59.48a.91.91,0,0,0-.9-.83H99a13.63,13.63,0,0,0,1.55-4.5Zm2.71-2a1.07,1.07,0,1,1-1.06,1.06,1.07,1.07,0,0,1,1.06-1.06Zm-1.06-11.1a1.07,1.07,0,1,1,1.09,1.06h-.05a1.06,1.06,0,0,1-1-1.06ZM66.23,42.15h0a1.06,1.06,0,0,1-1-1.06,1.07,1.07,0,1,1,1.09,1.06Zm0,12.17a1.07,1.07,0,1,1,1.07-1.07,1.07,1.07,0,0,1-1.07,1.07Zm1.07,11.1a1.07,1.07,0,1,1-1.07-1.06,1.06,1.06,0,0,1,1.07,1.06Zm13.64,6.22a1.12,1.12,0,0,1,0-2.24H91.77a1.12,1.12,0,1,1,0,2.24Zm8,9.33H83.77A1.75,1.75,0,0,1,82,79.22V77.47h8.64v1.75A1.74,1.74,0,0,1,88.92,81Zm2.85-5.29H80.91a1.12,1.12,0,0,1,0-2.24H91.77a1.12,1.12,0,0,1,0,2.24Zm14.71-11.32a1.06,1.06,0,1,1-1.06,1.06,1.07,1.07,0,0,1,1.06-1.06Zm0,0" transform="translate(0.08)"/><path d="M94.19,41.22h0a1,1,0,0,0,.4.1.9.9,0,0,0,.4-1.71.91.91,0,0,0-1.21.4.9.9,0,0,0,.41,1.21Zm0,0" transform="translate(0.08)"/></svg>
                        </li>
                        <li>
                           <svg id="_3_partner" data-name=" 3 partner" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172.88 176.72"><defs><clipPath id="clip-path" transform="translate(-0.75 0.16)"><rect class="cls-111" x="64.58" y="39.21" width="45.21" height="35.08"/></clipPath></defs><title>3 partner</title><circle class="cls-222" cx="86.44" cy="86.44" r="83.94"/><g id="Ellipse_1_copy" data-name="Ellipse 1 copy"><image class="cls-333" width="166" height="166" transform="translate(4.25 10.72)" href="data:image/png;base64,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"/><circle class="cls-444" cx="86.44" cy="86.44" r="67.5"/></g><text id="Partner" class="cls-555" transform="translate(59.7 124.41)">P<tspan class="cls-666" x="10.16" y="0">a</tspan><tspan class="cls-777" x="18.67" y="0">r</tspan><tspan class="cls-666" x="24.85" y="0">tner</tspan></text><g class="cls-888"><path d="M109.51,51.14l-1.18-2a.88.88,0,0,0-1.53.88L108,52a.34.34,0,0,1,0,.27.31.31,0,0,1-.16.2l-3.11,1.8a.34.34,0,0,1-.47-.12L98,43.32a.34.34,0,0,1,.13-.47l3.11-1.8a.34.34,0,0,1,.47.12l1.12,1.93a.87.87,0,0,0,1.2.33.89.89,0,0,0,.33-1.21l-1.12-1.93a2.11,2.11,0,0,0-2.88-.77l-3.11,1.8a2.1,2.1,0,0,0-1,1.18H87.46a4.64,4.64,0,0,0-3.28,1.36l-.9.91a10.4,10.4,0,0,0-2.42-.29H78.11a2.08,2.08,0,0,0-1-1.3L74,41.38a2.1,2.1,0,0,0-2.88.78L64.87,53a2.11,2.11,0,0,0,.77,2.88l3.11,1.8a2.13,2.13,0,0,0,1.06.28,1.64,1.64,0,0,0,.38,0l2.55,2.55a3.18,3.18,0,0,0,2.94,3.79c0,.11,0,.22,0,.33a3.18,3.18,0,0,0,3.18,3.18h.07v.07A3.18,3.18,0,0,0,82.08,71h.07v.07a3.17,3.17,0,0,0,5.42,2.24l1.26-1.25a3.07,3.07,0,0,0,.77-1.27,3.2,3.2,0,0,0,1.89.61,3.13,3.13,0,0,0,3-2.23,3.12,3.12,0,0,0,1.74.52,3.16,3.16,0,0,0,2.24-.93,3.19,3.19,0,0,0,.87-1.61,3,3,0,0,0,1,.16,3.18,3.18,0,0,0,2.25-5.42l-2.07-2.06,3.77-3.76h.25a2.09,2.09,0,0,0,1.05-.28l3.11-1.8a2.09,2.09,0,0,0,1-1.28,2.13,2.13,0,0,0-.21-1.6Zm-43,3.22a.4.4,0,0,1-.16-.21.33.33,0,0,1,0-.26L72.66,43a.32.32,0,0,1,.21-.16H73a.38.38,0,0,1,.17,0l3.12,1.8a.34.34,0,0,1,.12.47L70.11,56a.35.35,0,0,1-.47.13Zm7.93,6.74a1.37,1.37,0,0,1,.41-1l.76-.76a1.41,1.41,0,0,1,2.41,1,1.43,1.43,0,0,1-.41,1l-.76.76a1.42,1.42,0,0,1-2,0,1.37,1.37,0,0,1-.41-1ZM78.84,66a1.41,1.41,0,0,1-1-2.41l1.26-1.25a1.39,1.39,0,0,1,1-.42,1.41,1.41,0,0,1,1,2.41L79.84,65.6a1.43,1.43,0,0,1-1,.41Zm3.24,3.24a1.37,1.37,0,0,1-1-.41,1.39,1.39,0,0,1,0-2l1.25-1.26a1.41,1.41,0,0,1,2,2l-1.26,1.25a1.39,1.39,0,0,1-1,.41Zm5.5,1.58-1.26,1.25a1.38,1.38,0,0,1-1,.42,1.4,1.4,0,0,1-1-.42,1.37,1.37,0,0,1-.41-1,1.39,1.39,0,0,1,.41-1l1.26-1.26a1.4,1.4,0,0,1,1-.41,1.41,1.41,0,0,1,1,2.41Zm13.79-5.68a1.4,1.4,0,0,1-2,0L91,56.73A.88.88,0,0,0,89.7,58l7.55,7.55a1.41,1.41,0,0,1-1,2.41,1.43,1.43,0,0,1-1-.41l-9.08-9.08a.88.88,0,0,0-1.25,1.25l7.56,7.55a1.41,1.41,0,0,1-2,2l-1.66-1.66h0a3.15,3.15,0,0,0-2.31-.92.2.2,0,0,0,0-.07,3.16,3.16,0,0,0-.93-2.25,3.24,3.24,0,0,0-2.32-.93v-.07a3.18,3.18,0,0,0-3.48-3.16,3.12,3.12,0,0,0-.92-2.09,3.19,3.19,0,0,0-4.5,0l-.76.76h0l-2-2L77.8,46.25h3.06a8.83,8.83,0,0,1,.89,0l-1,1a3.17,3.17,0,1,0,4.49,4.49l2.39-2.38,13.75,13.75a1.41,1.41,0,0,1,0,2Zm-8.49-13A5,5,0,0,0,95,48.12a.89.89,0,0,0-1.77,0,3.24,3.24,0,0,1-1.58,2.78l-3.36-3.36a.89.89,0,0,0-1.25,0l-3,3a1.42,1.42,0,0,1-2,0,1.42,1.42,0,0,1,0-2l3.44-3.44a2.87,2.87,0,0,1,2-.84h9.05l6.23,10.78a.43.43,0,0,0,0,.07L99.31,58.6Zm0,0" transform="translate(-0.75 0.16)"/></g><path d="M105.58,47a.89.89,0,0,0,.88-.89.89.89,0,0,0-.88-.88.88.88,0,0,0-.63.26.89.89,0,0,0-.25.62.87.87,0,0,0,.88.89Zm0,0" transform="translate(-0.75 0.16)"/></svg>
                        </li>
                        <li>
                        <svg id="_4_creat" data-name=" 4 creat" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172.94 176.56"><defs><clipPath id="clip-path" transform="translate(-0.63)"><rect class="cls-111" x="64.07" y="38.16" width="46.06" height="46.25"/></clipPath></defs><title>4 creat</title><ellipse class="cls-222" cx="86.47" cy="86.28" rx="83.97" ry="83.78"/><g id="Ellipse_1_copy" data-name="Ellipse 1 copy"><image class="cls-333" width="166" height="166" transform="translate(4.37 10.56)" href="data:image/png;base64,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"/><circle class="cls-444" cx="86.47" cy="86.28" r="67.5"/></g><text id="Create" class="cls-555" transform="translate(62.93 123.46)">C<tspan class="cls-666" x="10.39" y="0">r</tspan><tspan x="16.03" y="0">eate</tspan></text><g class="cls-777"><path d="M82.08,74.79l-.75.13-.92-5.2a.71.71,0,0,0-.17-.36l-6.75-8A3.06,3.06,0,0,0,71,60.23l-.88-5a3,3,0,1,0-6,1.06L67.05,72.8a.74.74,0,0,0,.24.44l3.46,3.05.09.48-.75.14a.75.75,0,0,0-.62.88l1.06,6a.75.75,0,0,0,.75.63h.13l12-2.11A.78.78,0,0,0,84,81.4l-1.06-6a.7.7,0,0,0-.31-.49.77.77,0,0,0-.57-.13Zm-9.74,1.72-.13-.75a.85.85,0,0,0-.25-.44l-3.46-3L65.64,56.05a1.52,1.52,0,0,1,3-.52l.91,5.16-.34.25a3.05,3.05,0,0,0-.38,4.29l5.59,6.66,1.17-1L70,64.25a1.53,1.53,0,0,1,.19-2.14,1.48,1.48,0,0,1,.46-.26l.07,0,.19,0a1.54,1.54,0,0,1,1.43.52L79,70.18l.89,5Zm-.44,6.26-.8-4.5,10.49-1.85.8,4.5Zm0,0" transform="translate(-0.63)"/><path d="M109.5,54.05A3,3,0,0,0,104,55.26l-.88,5a3.1,3.1,0,0,0-2.48,1.08l-6.75,8a.8.8,0,0,0-.17.36l-.91,5.2-.75-.13a.78.78,0,0,0-.89.62l-1.05,6a.76.76,0,0,0,.61.88l12,2.11h.13a.76.76,0,0,0,.75-.63l1-6a.75.75,0,0,0-.61-.88l-.75-.14.08-.48,3.46-3.05a.73.73,0,0,0,.25-.43L110,56.32a3,3,0,0,0-.5-2.27Zm-7.25,28.72L91.76,80.92l.79-4.5L103,78.27Zm6.26-26.71-2.86,16.22-3.46,3a.79.79,0,0,0-.25.44l-.13.75-7.5-1.32.89-5,6.62-7.88a1.5,1.5,0,0,1,1.43-.52l.19,0,.08,0a1.31,1.31,0,0,1,.44.26,1.51,1.51,0,0,1,.19,2.14l-5.59,6.67,1.17,1,5.59-6.66a3.06,3.06,0,0,0-.38-4.3l-.33-.24.91-5.16a1.52,1.52,0,1,1,3,.53Zm0,0" transform="translate(-0.63)"/></g><path d="M91.6,62.75l.63-1.88,2.64-.66a.76.76,0,0,0,.57-.74V58.26L97.5,56.2a.73.73,0,0,0,.23-.54v-3.8a.77.77,0,0,0-.13-.42l-1.4-2.09V46.53A.79.79,0,0,0,96,46l-1.52-1.52a.77.77,0,0,0-.54-.22H92.19l-.59-1.76a.75.75,0,0,0-.72-.52H88.59a.75.75,0,0,0-.53.22l-1,1-1-1a.77.77,0,0,0-.54-.22H83.27a.75.75,0,0,0-.72.52L82,44.25H80.22a.75.75,0,0,0-.53.22L78.16,46a.79.79,0,0,0-.22.54v2.82l-1.39,2.09a.7.7,0,0,0-.13.42v3.8a.76.76,0,0,0,.22.54l2.06,2.06v1.21a.77.77,0,0,0,.58.74l2.64.66.63,1.88a.75.75,0,0,0,.72.52h2.28a.77.77,0,0,0,.54-.22l1-1,1,1a.75.75,0,0,0,.53.22h2.29a.75.75,0,0,0,.72-.52Zm-6.36-1H83.82l-.44-1.31,1.19-1.19a.79.79,0,0,0,.22-.54V58H83.27v.44l-1,1-2-.51v-4H78.7v1.21l-.76-.76V52.09l.88-1.32.64.64v.45H81V51.1a.77.77,0,0,0-.22-.54l-1.3-1.3V46.85l1.08-1.08h1.65l1.08,1.08v.44h1.52v-.76a.79.79,0,0,0-.22-.54l-1.19-1.18.44-1.32h1.42l1.07,1.07V60.68Zm3.67,0-1.08-1.07V44.56l1.08-1.07h1.42l.44,1.32L89.58,46a.79.79,0,0,0-.22.54v.76h1.52v-.44L92,45.77h1.66l1.07,1.08v2.41l-1.3,1.3a.77.77,0,0,0-.22.54v.76h1.52v-.45l.65-.64.87,1.32v3.26l-.76.76V54.9H93.92v4l-2,.51-1-1V58H89.36v.76a.79.79,0,0,0,.22.54l1.19,1.19-.44,1.31Zm0,0" transform="translate(-0.63)"/><path d="M91.1,53.16l1.08-1.08-1.3-1.3v-2H89.36V51.1a.79.79,0,0,0,.22.54Zm0,0" transform="translate(-0.63)"/><path d="M91.42,54.37l-1.08,1.07.54.54v1.21H92.4V55.66a.75.75,0,0,0-.22-.53Zm0,0" transform="translate(-0.63)"/><path d="M83.27,50.78,82,52.08,83,53.16l1.53-1.52a.79.79,0,0,0,.22-.54V48.82H83.27Zm0,0" transform="translate(-0.63)"/><path d="M82,55.13a.75.75,0,0,0-.22.53v1.53h1.52V56l.54-.54-1.08-1.07Zm0,0" transform="translate(-0.63)"/><rect x="85.69" y="38.16" width="1.52" height="1.52"/><path d="M82.59,38.85l1.47-.39.4,1.47L83,40.32Zm0,0" transform="translate(-0.63)"/><path d="M79.18,40.48l1.32-.76L81.26,41,80,41.8Zm0,0" transform="translate(-0.63)"/><path d="M76.31,42.93l1.08-1.07,1.07,1.07L77.39,44Zm0,0" transform="translate(-0.63)"/><path d="M74.17,46.05l.76-1.32,1.32.76-.76,1.32Zm0,0" transform="translate(-0.63)"/><path d="M72.91,49.61l.39-1.47,1.47.4L74.38,50Zm0,0" transform="translate(-0.63)"/><rect x="71.99" y="51.86" width="1.52" height="1.52"/><path d="M72.91,55.63l1.47-.4.39,1.47-1.47.4Zm0,0" transform="translate(-0.63)"/><path d="M74.17,59.19l1.32-.76.76,1.32-1.32.76Zm0,0" transform="translate(-0.63)"/><path d="M76.31,62.31l1.08-1.08,1.07,1.08-1.07,1.07Zm0,0" transform="translate(-0.63)"/><path d="M79.18,64.76l.76-1.32,1.32.76-.76,1.32Zm0,0" transform="translate(-0.63)"/><path d="M82.6,66.39,83,64.92l1.47.39-.39,1.47Zm0,0" transform="translate(-0.63)"/><rect x="85.69" y="65.56" width="1.52" height="1.52"/><path d="M89.69,65.31l1.47-.39.39,1.47-1.47.39Zm0,0" transform="translate(-0.63)"/><path d="M92.88,64.21l1.32-.77L95,64.76l-1.32.76Zm0,0" transform="translate(-0.63)"/><path d="M95.68,62.31l1.08-1.08,1.07,1.08-1.07,1.07Zm0,0" transform="translate(-0.63)"/><path d="M97.9,59.75l.76-1.32,1.31.76-.76,1.32Zm0,0" transform="translate(-0.63)"/><path d="M99.37,56.7l.4-1.47,1.47.4-.4,1.47Zm0,0" transform="translate(-0.63)"/><rect x="99.38" y="51.86" width="1.52" height="1.52"/><path d="M99.37,48.54l1.47-.4.4,1.47-1.48.4Zm0,0" transform="translate(-0.63)"/><path d="M97.9,45.49l1.31-.76.76,1.32-1.31.76Zm0,0" transform="translate(-0.63)"/><path d="M95.68,42.93l1.08-1.07,1.07,1.07L96.76,44Zm0,0" transform="translate(-0.63)"/><path d="M92.88,41l.76-1.32,1.32.76L94.2,41.8Zm0,0" transform="translate(-0.63)"/><path d="M89.69,39.93l.39-1.47,1.47.39-.39,1.47Zm0,0" transform="translate(-0.63)"/></svg>
                        </li>
                        <li>
                          <svg id="_5_deliver" data-name=" 5 deliver" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172.5 176.5"><defs><clipPath id="clip-path" transform="translate(-0.45 0)"><rect class="cls-111" x="63.11" y="38.01" width="47.17" height="43.24"/></clipPath></defs><title>5 deliver</title><path class="cls-222" d="M86.85,2.5A83.75,83.75,0,1,1,3,86.25,83.76,83.76,0,0,1,86.85,2.5Z" transform="translate(-0.45 0)"/><g id="Ellipse_1_copy" data-name="Ellipse 1 copy"><image class="cls-333" width="166" height="166" transform="translate(4.55 10.5)" href="data:image/png;base64,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"/><circle class="cls-444" cx="86.25" cy="86.25" r="67.5"/></g><text id="Deliver" class="cls-5" transform="translate(61.44 123.81)">Deli<tspan class="cls-666" x="27.32" y="0">v</tspan><tspan x="35.24" y="0">er</tspan></text><g class="cls-777"><path d="M65.78,80.54a.85.85,0,0,0,1,.69L73.69,80a.85.85,0,0,0,.69-1l-.13-.77L75.86,77a3.17,3.17,0,0,1,2.27-.73l11.3.83h.12a11.82,11.82,0,0,0,6.93-2.27.39.39,0,0,0,.1-.08L110,61.53a.85.85,0,0,0,0-1.16,4.44,4.44,0,0,0-6.1-.59L97.8,64.4a5.63,5.63,0,0,0-5.31-2l-6.32,1.1a6.71,6.71,0,0,1-3-.16l-.71-.2A11.46,11.46,0,0,0,72,65.35l-.27-1.52a.85.85,0,0,0-1-.69l-6.93,1.21a.84.84,0,0,0-.68,1ZM82,64.82l.71.2a8.62,8.62,0,0,0,3.78.19l6.31-1.1a3.92,3.92,0,0,1,4.3,2.36l-9.45,1.66a.85.85,0,0,0,.14,1.68h.15L98.3,68A.85.85,0,0,0,99,67a6.33,6.33,0,0,0-.32-1.13L105,61.14l0,0a2.74,2.74,0,0,1,3.17-.16L95.43,73.45a10,10,0,0,1-5.88,1.91h0l-11.27-.83a4.83,4.83,0,0,0-3.46,1.11l-.88.71-1.58-9A9.77,9.77,0,0,1,82,64.82ZM70.2,65l2.36,13.53-5.25.92L64.94,65.88Zm0,0" transform="translate(-0.45 0)"/></g><path d="M88.82,61.13A11.52,11.52,0,1,0,77.3,49.61,11.52,11.52,0,0,0,88.82,61.13Zm0-21.34A9.83,9.83,0,1,1,79,49.61a9.82,9.82,0,0,1,9.82-9.82Zm0,0" transform="translate(-0.45 0)"/><path d="M88.23,51.39H93a.85.85,0,1,0,0-1.69H89V44.27a.85.85,0,1,0-1.7,0V50.5a.92.92,0,0,0,.9.89Zm0,0" transform="translate(-0.45 0)"/></svg>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            
            </div>
            
          </div>
       </section>

       <section className='explore-ideo'>
        <div className='video-div'>
        <iframe src="https://www.youtube.com/embed/lbpwjUFXKbk"></iframe>

 
       </div>
      </section>


      <section className='why-ideo-sec'>
        <div className='container'>
          <div className='width-adjustment why-ideo-slider-div'>
          <p className='heading'>
          why ideofuzion
          </p>
          <Slider {...settings}>
        <div className='why-ideo-slider'>
          <div className='single-box'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.5 130.5"><defs></defs><title>innovation</title><circle class="cls-1" cx="65.25" cy="65.25" r="65.25"/><circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" class="cls-2" cx="65.25" cy="65.25" r="53.72"/><path class="cls-33" d="M65.28,82H59.7c-1.85,0-2.49-.59-2.59-2.2a24.55,24.55,0,0,0-3.64-10.92A13.42,13.42,0,0,1,57,51.72a13.62,13.62,0,0,1,17.58.66,13.44,13.44,0,0,1,2.36,17.08A20.2,20.2,0,0,0,73.7,79.53,2.2,2.2,0,0,1,71.82,82h0a2.43,2.43,0,0,1-.66,0C69.21,82.07,67.24,82,65.28,82Zm.08-1.22H71c1.1,0,1.5-.44,1.55-1.46a22.09,22.09,0,0,1,3.43-10.6,12.15,12.15,0,0,0-2.42-15.63,12.31,12.31,0,0,0-15.82-.37,12.17,12.17,0,0,0-3.14,15.53A25.64,25.64,0,0,1,58.3,79.44c.06,1.1.6,1.39,1.62,1.35C61.7,80.72,63.55,80.78,65.36,80.78Z"/><path class="cls-44" d="M66.51,47.72H64V35.47h2.52Z"/><path class="cls-44" d="M71.55,87.72c-.2,1.39-.71,1.66-1.62,1.41-3.18-.89-6.36-1.81-9.54-2.69-1.17-.32-1.26-1.1-1-2.06s1.1-.69,1.74-.49c2.93.82,5.89,1.6,8.79,2.51C70.52,86.57,71,87.24,71.55,87.72Z"/><path class="cls-44" d="M71.29,90.52c0,1.43-.36,2-1.51,1.73-3.09-.85-6.19-1.68-9.24-2.64a2.32,2.32,0,0,1-1.21-1.41c-.27-.87,0-1.58,1.19-1.24,3.29.93,6.59,1.83,9.89,2.8C70.78,89.89,71.11,90.36,71.29,90.52Z"/><path class="cls-44" d="M57.15,50.27l-1.71,1.37-8.2-8.22,1.66-1.56Z"/><path class="cls-44" d="M41,58.49H51.33l-.41,2.58h-10Z"/><path class="cls-44" d="M81.86,42.1l1.36,1.1L75,51.36l-1.36-1.1Z"/><path class="cls-44" d="M89.56,58.52v2.67H80.08c-.26,0-.25,0-.36-.34a19,19,0,0,1-.25-2.26Z"/><path class="cls-44" d="M49,78l-1.67-1.71,5.93-5.89c1.49,1.78,1.49,1.77-.26,3.53C51.7,75.24,50.44,76.57,49,78Z"/><path class="cls-44" d="M81.35,77.78c-1.54-1.58-3.24-3.29-4.77-4.9-1.1-1.27.18-1.7.65-2.37l6,5.79Z"/><path class="cls-44" d="M67.59,92.46c-2.28,0-4.58.06-6.86,0-1.4,0-1.61-.58-1.1-2.57l8.07,2.28Z"/><path class="cls-44" d="M62.7,83.46h7.41c1.18,0,1.25.88,1.17,1.75-.09,1.1-.88.73-1.48.56l-7.11-2Z"/><path class="cls-44" d="M67.88,93.33c-.07,1.92-1.43,1.68-2.56,1.7s-2.44.15-2.57-1.7Z"/></svg>

          <p className='why-ideo-bold-txt'>
            innovation
          </p>
          <p className='why-ideo-light-txt'>
          Your Ideas, Our Solution.<br/>
          Expert developers in innovative Blockchain products and Solutions for your business needs.
          </p>
          </div>
        </div>
        <div className='why-ideo-slider'>
          <div className='single-box'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.18 130.18"><defs><style></style></defs><title>ethic</title><circle class="cls-1" cx="65.09" cy="65.09" r="65.09"/><circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" class="cls-2" cx="65.09" cy="65.09" r="53.59"/><path class="cls-3" d="M48.58,42.17c.74-2.24,1.39-4,3.72-4.82.71-.24.87-2.08,1.26-3.11,2.12-.52,4.44-1,6.71-1.66,9.19-2.6,17.12,2,19.31,11.32a4,4,0,0,1,.16.82c.1,4.06.38,8.13.2,12.17a6.26,6.26,0,0,1-3.74,5.53c-.43.2-.69.79-1,1.22-1.66,2.18-3.07,4.62-5,6.48-4.17,4-9.24,3.45-12.9-1-.36-.43-.65-.92-1-1.36-1.38-1.76-2.11-3.92-4.46-5-2-1-3.22-7.14-2.48-9.41a7,7,0,0,0,.35-2c0-3,0-6,0-9.08Zm7.66,4.15c-.47,1.77-.58,3.34-1.28,4.58-1.4,2.49-1.18,5-.68,7.57a8.74,8.74,0,0,1,.17,1.25,13.86,13.86,0,0,0,4.12,9c3.87,4.12,8.29,3.86,12-.42s4.85-8.92,5-14.26c.1-3.44.31-3.35-3.08-4.13a29.33,29.33,0,0,1-4.31-1.72L68,50.3l-1.84-1.51c0,.5,0,.87,0,.82Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M59.14,100.4c-7.57-.37-15.52.06-22.91-3.6a2.51,2.51,0,0,1-1.62-3c.64-5.1,1.19-10.21,1.82-15.32.28-2.3,1.49-4.17,3.74-4.68C45,72.75,49.8,72,54.3,71.18Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M70.89,100.34c1.69-9.41,3.37-18.82,5.1-28.48a41,41,0,0,1,12.54,2.45c1.89.71,2.72,2.5,2.92,4.57.46,4.63,1,9.25,1.56,13.86.41,3.05.37,3.39-2.44,4.69C84.29,100.31,77.58,100.29,70.89,100.34Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M68.13,100.21H61.05c.29-4.11.56-8.1.86-12.09.13-1.83.33-3.65.46-5.48,0-.41.08-1-.15-1.21-1.7-1.63-.63-3.37-.35-5.11s1-2.31,2.82-2.23c1.44.07,2.2.38,2.46,1.86.34,1.88,1,3.54-.12,5.6-.71,1.26-.1,3.3,0,5C67.37,91,67.75,95.52,68.13,100.21Z" transform="translate(1.21 -1.04)"/></svg>

          <p className='why-ideo-bold-txt'>
          Professional Work Ethic
          </p>
          <p className='why-ideo-light-txt'>
          Unrivaled Technical Expertise in Blockchain solutions and App development.
          </p>
          </div>
        </div>
        <div className='why-ideo-slider'>
          <div className='single-box'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.5 130.5"><defs></defs><title>Tech Support</title><circle class="cls-1" cx="65.25" cy="65.25" r="65.25"/><circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" class="cls-2" cx="65.25" cy="65.25" r="53.72"/><path class="cls-3" d="M73.69,81.61l9.13-3.44c1.2-.45,2.29-.89,3.58,0,1.13.74,2.16,1.36,1.16,3.66a19,19,0,0,1,2.08-.61,2.46,2.46,0,0,1,3,1.57,2.15,2.15,0,0,1-.93,3C84.2,90,76.9,94.62,68.42,96.78c-2.49.64-4.76,0-7.07-.59-2.86-.72-5.71-1.51-8.5-2.47a9.38,9.38,0,0,0-6.48,0A41.37,41.37,0,0,1,42.11,95,2.36,2.36,0,0,1,39,93.18Q37.75,88.64,36.75,84A2.22,2.22,0,0,1,38.5,81.2C44,80,49.41,78.7,54.9,77.65a6.65,6.65,0,0,1,5.81,1.85A9.71,9.71,0,0,0,67.45,82a8,8,0,0,1,3.09.37c.92.45,2.15,1.43,2.2,2.23a3.35,3.35,0,0,1-1.85,2.54,14.6,14.6,0,0,1-10.45-.2c-1.32-.48-2.52-1.31-3.83-1.82-.44-.18-1.06.11-1.59.18a4.06,4.06,0,0,0,.75,1.29A16.63,16.63,0,0,0,70.64,89.4C74.68,88.37,75.82,85.38,73.69,81.61Z" transform="translate(0.46 -0.02)"/><path class="cls-3" d="M61.63,51.32c2.14-.5,2.71-1.65,2.74-3.63s-.91-2.87-2.69-3.48l1.65-3.94a3.48,3.48,0,0,0,4.48-.72c1.46-1.38,1.57-2.59.55-4.34l4-1.7c.63,1.77,1.48,2.71,3.59,2.7s3-.87,3.59-2.7l4,1.64c-.75,1.69-.94,3,.69,4.44,1.43,1.25,2.6,1.62,4.35.62l1.74,3.93c-1.64.71-2.75,1.5-2.75,3.69s1.07,2.89,2.72,3.57l-1.64,4c-1.69-.82-3-.9-4.46.59s-1.5,2.74-.62,4.46l-4,1.67C79,60.37,78.17,59.34,76,59.37a3.36,3.36,0,0,0-3.62,2.72l-4-1.63c.62-1.63,1-2.94-.62-4.42s-2.67-1.71-4.45-.62Zm14.43-9.4a5.89,5.89,0,1,0-.2,11.78,5.89,5.89,0,0,0,6-5.9A5.83,5.83,0,0,0,76.06,41.92Z" transform="translate(0.46 -0.02)"/><path class="cls-3" d="M55.92,47.57,60.17,50c-1.3,1.67-1.36,3-.24,5s2.21,2.51,4.26,2.12v5c-2-.33-3.17.45-4.31,2.29s-.91,3.2.28,4.86L56,71.69c-.92-1.72-1.86-2.92-4.2-2.81-2.18.09-3.42.82-4.12,2.84L43.45,69.3c1-1.62,1.49-3,.24-4.91s-2.2-2.71-4.45-2.25a21.53,21.53,0,0,0,0-2.57c-.21-1.77.29-2.69,2.28-2.43.42,0,1-.53,1.37-.89.2-.18.19-.6.38-.82,1.39-1.7,2.06-3.44.11-5.36l4.21-2.46a4.14,4.14,0,0,0,4.17,2.7A3.81,3.81,0,0,0,55.92,47.57ZM51.73,54.2a5.44,5.44,0,1,0,5.54,5.44A5.43,5.43,0,0,0,51.73,54.2Z" transform="translate(0.46 -0.02)"/></svg>

          <p className='why-ideo-bold-txt'>
          Tech Support
          </p>
          <p className='why-ideo-light-txt'>
          Your Success, Our Responsibility.<br/>
          We provide 24/7 support and our team works closely to provide the best Blockchain conultancy to our clients.
          </p>
          </div>
        </div>
        <div className='why-ideo-slider'>
          <div className='single-box'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.18 130.18"><defs><style></style></defs><title>ethic</title><circle class="cls-1" cx="65.09" cy="65.09" r="65.09"/><circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" class="cls-2" cx="65.09" cy="65.09" r="53.59"/><path class="cls-3" d="M48.58,42.17c.74-2.24,1.39-4,3.72-4.82.71-.24.87-2.08,1.26-3.11,2.12-.52,4.44-1,6.71-1.66,9.19-2.6,17.12,2,19.31,11.32a4,4,0,0,1,.16.82c.1,4.06.38,8.13.2,12.17a6.26,6.26,0,0,1-3.74,5.53c-.43.2-.69.79-1,1.22-1.66,2.18-3.07,4.62-5,6.48-4.17,4-9.24,3.45-12.9-1-.36-.43-.65-.92-1-1.36-1.38-1.76-2.11-3.92-4.46-5-2-1-3.22-7.14-2.48-9.41a7,7,0,0,0,.35-2c0-3,0-6,0-9.08Zm7.66,4.15c-.47,1.77-.58,3.34-1.28,4.58-1.4,2.49-1.18,5-.68,7.57a8.74,8.74,0,0,1,.17,1.25,13.86,13.86,0,0,0,4.12,9c3.87,4.12,8.29,3.86,12-.42s4.85-8.92,5-14.26c.1-3.44.31-3.35-3.08-4.13a29.33,29.33,0,0,1-4.31-1.72L68,50.3l-1.84-1.51c0,.5,0,.87,0,.82Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M59.14,100.4c-7.57-.37-15.52.06-22.91-3.6a2.51,2.51,0,0,1-1.62-3c.64-5.1,1.19-10.21,1.82-15.32.28-2.3,1.49-4.17,3.74-4.68C45,72.75,49.8,72,54.3,71.18Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M70.89,100.34c1.69-9.41,3.37-18.82,5.1-28.48a41,41,0,0,1,12.54,2.45c1.89.71,2.72,2.5,2.92,4.57.46,4.63,1,9.25,1.56,13.86.41,3.05.37,3.39-2.44,4.69C84.29,100.31,77.58,100.29,70.89,100.34Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M68.13,100.21H61.05c.29-4.11.56-8.1.86-12.09.13-1.83.33-3.65.46-5.48,0-.41.08-1-.15-1.21-1.7-1.63-.63-3.37-.35-5.11s1-2.31,2.82-2.23c1.44.07,2.2.38,2.46,1.86.34,1.88,1,3.54-.12,5.6-.71,1.26-.1,3.3,0,5C67.37,91,67.75,95.52,68.13,100.21Z" transform="translate(1.21 -1.04)"/></svg>

          <p className='why-ideo-bold-txt'>
            innovation
          </p>
          <p className='why-ideo-light-txt'>
          Your Ideas, Our Solution.<br/>
          Expert developers in innovative Blockchain products and Solutions for your business needs.
          </p>
          </div>
        </div>
        <div className='why-ideo-slider'>
          <div className='single-box'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.18 130.18"><defs><style></style></defs><title>ethic</title><circle class="cls-1" cx="65.09" cy="65.09" r="65.09"/><circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" class="cls-2" cx="65.09" cy="65.09" r="53.59"/><path class="cls-3" d="M48.58,42.17c.74-2.24,1.39-4,3.72-4.82.71-.24.87-2.08,1.26-3.11,2.12-.52,4.44-1,6.71-1.66,9.19-2.6,17.12,2,19.31,11.32a4,4,0,0,1,.16.82c.1,4.06.38,8.13.2,12.17a6.26,6.26,0,0,1-3.74,5.53c-.43.2-.69.79-1,1.22-1.66,2.18-3.07,4.62-5,6.48-4.17,4-9.24,3.45-12.9-1-.36-.43-.65-.92-1-1.36-1.38-1.76-2.11-3.92-4.46-5-2-1-3.22-7.14-2.48-9.41a7,7,0,0,0,.35-2c0-3,0-6,0-9.08Zm7.66,4.15c-.47,1.77-.58,3.34-1.28,4.58-1.4,2.49-1.18,5-.68,7.57a8.74,8.74,0,0,1,.17,1.25,13.86,13.86,0,0,0,4.12,9c3.87,4.12,8.29,3.86,12-.42s4.85-8.92,5-14.26c.1-3.44.31-3.35-3.08-4.13a29.33,29.33,0,0,1-4.31-1.72L68,50.3l-1.84-1.51c0,.5,0,.87,0,.82Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M59.14,100.4c-7.57-.37-15.52.06-22.91-3.6a2.51,2.51,0,0,1-1.62-3c.64-5.1,1.19-10.21,1.82-15.32.28-2.3,1.49-4.17,3.74-4.68C45,72.75,49.8,72,54.3,71.18Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M70.89,100.34c1.69-9.41,3.37-18.82,5.1-28.48a41,41,0,0,1,12.54,2.45c1.89.71,2.72,2.5,2.92,4.57.46,4.63,1,9.25,1.56,13.86.41,3.05.37,3.39-2.44,4.69C84.29,100.31,77.58,100.29,70.89,100.34Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M68.13,100.21H61.05c.29-4.11.56-8.1.86-12.09.13-1.83.33-3.65.46-5.48,0-.41.08-1-.15-1.21-1.7-1.63-.63-3.37-.35-5.11s1-2.31,2.82-2.23c1.44.07,2.2.38,2.46,1.86.34,1.88,1,3.54-.12,5.6-.71,1.26-.1,3.3,0,5C67.37,91,67.75,95.52,68.13,100.21Z" transform="translate(1.21 -1.04)"/></svg>

          <p className='why-ideo-bold-txt'>
            innovation
          </p>
          <p className='why-ideo-light-txt'>
          Your Ideas, Our Solution.<br/>
          Expert developers in innovative Blockchain products and Solutions for your business needs.
          </p>
          </div>
        </div>
        <div className='why-ideo-slider'>
          <div className='single-box'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.18 130.18"><defs><style></style></defs><title>ethic</title><circle class="cls-1" cx="65.09" cy="65.09" r="65.09"/><circle id="Ellipse_2_copy" data-name="Ellipse 2 copy" class="cls-2" cx="65.09" cy="65.09" r="53.59"/><path class="cls-3" d="M48.58,42.17c.74-2.24,1.39-4,3.72-4.82.71-.24.87-2.08,1.26-3.11,2.12-.52,4.44-1,6.71-1.66,9.19-2.6,17.12,2,19.31,11.32a4,4,0,0,1,.16.82c.1,4.06.38,8.13.2,12.17a6.26,6.26,0,0,1-3.74,5.53c-.43.2-.69.79-1,1.22-1.66,2.18-3.07,4.62-5,6.48-4.17,4-9.24,3.45-12.9-1-.36-.43-.65-.92-1-1.36-1.38-1.76-2.11-3.92-4.46-5-2-1-3.22-7.14-2.48-9.41a7,7,0,0,0,.35-2c0-3,0-6,0-9.08Zm7.66,4.15c-.47,1.77-.58,3.34-1.28,4.58-1.4,2.49-1.18,5-.68,7.57a8.74,8.74,0,0,1,.17,1.25,13.86,13.86,0,0,0,4.12,9c3.87,4.12,8.29,3.86,12-.42s4.85-8.92,5-14.26c.1-3.44.31-3.35-3.08-4.13a29.33,29.33,0,0,1-4.31-1.72L68,50.3l-1.84-1.51c0,.5,0,.87,0,.82Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M59.14,100.4c-7.57-.37-15.52.06-22.91-3.6a2.51,2.51,0,0,1-1.62-3c.64-5.1,1.19-10.21,1.82-15.32.28-2.3,1.49-4.17,3.74-4.68C45,72.75,49.8,72,54.3,71.18Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M70.89,100.34c1.69-9.41,3.37-18.82,5.1-28.48a41,41,0,0,1,12.54,2.45c1.89.71,2.72,2.5,2.92,4.57.46,4.63,1,9.25,1.56,13.86.41,3.05.37,3.39-2.44,4.69C84.29,100.31,77.58,100.29,70.89,100.34Z" transform="translate(1.21 -1.04)"/><path class="cls-3" d="M68.13,100.21H61.05c.29-4.11.56-8.1.86-12.09.13-1.83.33-3.65.46-5.48,0-.41.08-1-.15-1.21-1.7-1.63-.63-3.37-.35-5.11s1-2.31,2.82-2.23c1.44.07,2.2.38,2.46,1.86.34,1.88,1,3.54-.12,5.6-.71,1.26-.1,3.3,0,5C67.37,91,67.75,95.52,68.13,100.21Z" transform="translate(1.21 -1.04)"/></svg>

          <p className='why-ideo-bold-txt'>
            innovation
          </p>
          <p className='why-ideo-light-txt'>
          Your Ideas, Our Solution.<br/>
          Expert developers in innovative Blockchain products and Solutions for your business needs.
          </p>
          </div>
        </div>
      </Slider>
          </div>
        
        </div>
      </section>

      <section className='services'  id='services'>
        <div className='services-inner-bg'>
        <div className='container'>
        <div className='width-adjustment'>
          <p className='heading'>
              services
          </p>
          <div className='services-inner'>
              <div className='row'>
                <div className='col-sm-7'>
                  <div className='row'>
                    <div className='col-sm-7'>
                      <div className='blue-div blockchain-dev'>
                                <div className='blue-div-inner'>
                                      <div className='svg-div'>
                                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.4 47.31"><title>icon_blockchain_development</title><path d="M21.69,48.67c-.87,2.16-2.63,3-4.45,2.26s-2.42-2.69-1.43-4.81l-1.28-1.23c-2-2-3.94-3.93-5.91-5.91-.22-.21-.38-.32-.72-.16a3.22,3.22,0,1,1-2.46-5.94l.31-.13v-.58q0-10.67,0-21.32c0-.4,0-.64-.49-.83A3.15,3.15,0,0,1,3.45,6.69a3.23,3.23,0,0,1,6.13-.9c.08.18.15.35.23.55h22a.68.68,0,0,0,.77-.48,3.2,3.2,0,1,1,5.88,2.55.62.62,0,0,0,.17.84q3.4,3.33,6.78,6.68a.53.53,0,0,0,.72.13,3.21,3.21,0,1,1,2.68,5.84.6.6,0,0,0-.45.65c0,7.28,0,14.56,0,21.84,0,.27,0,.46.34.6a3.2,3.2,0,0,1,2,3.46,3.23,3.23,0,0,1-6.25.52c0-.1-.07-.2-.11-.31Zm23.5-4.47c.17.23.35.45.51.68s.48.18.69,0a.64.64,0,0,0,.29-.45q0-11,0-22a.44.44,0,0,0-.35-.49,3,3,0,0,1-1.84-1.78.43.43,0,0,0-.5-.33c-.74,0-1.48,0-2.22,0H22.12a.6.6,0,0,0-.7.43,2.88,2.88,0,0,1-1.65,1.63.51.51,0,0,0-.38.58q0,11,0,21.94a.48.48,0,0,0,.36.54,2.94,2.94,0,0,1,1.66,1.62A.51.51,0,0,0,22,47H44a.57.57,0,0,0,.58-.38c.17-.32,0-.46-.2-.62s-.37-.27-.58-.43ZM7.47,10.29a1.62,1.62,0,0,0,0,.18q0,11,0,21.94a.5.5,0,0,0,.37.54,3.18,3.18,0,0,1,1.71,4.18.53.53,0,0,0,.15.71c2.28,2.25,4.56,4.51,6.81,6.8a.79.79,0,0,0,1.2.15V22.14c-2.26-1-2.85-2.44-2-4.92a5.23,5.23,0,0,1-.41-.34L8.94,10.54C8.32,9.92,8.32,9.92,7.47,10.29Zm36.81,7.9c.39-.48.24-.78-.12-1.13-2.3-2.23-4.58-4.49-6.86-6.75a.56.56,0,0,0-.68-.16,3.15,3.15,0,0,1-4-1.73A.53.53,0,0,0,32,8Q21.09,8,10.18,8c-.4,0-.48.22-.63.49s0,.44.19.62q3.36,3.34,6.73,6.72a.61.61,0,0,0,.8.17,3.14,3.14,0,0,1,4.17,1.69.69.69,0,0,0,.78.49H44.28ZM8.5,7.12A1.85,1.85,0,1,0,6.67,9,1.86,1.86,0,0,0,8.5,7.12Zm27-1.84a1.85,1.85,0,1,0,1.84,1.87A1.87,1.87,0,0,0,35.54,5.28ZM18.48,20.83A1.85,1.85,0,1,0,16.65,19,1.86,1.86,0,0,0,18.48,20.83Zm29,0a1.85,1.85,0,0,0,0-3.7,1.85,1.85,0,1,0,0,3.7ZM6.56,37.76a1.85,1.85,0,1,0,0-3.7,1.85,1.85,0,0,0,0,3.7ZM20.35,48a1.85,1.85,0,1,0-1.84,1.87A1.86,1.86,0,0,0,20.35,48Zm29,0a1.85,1.85,0,0,0-3.7,0,1.87,1.87,0,0,0,1.84,1.87A1.85,1.85,0,0,0,49.33,48Z" transform="translate(-3.32 -3.9)"/><path d="M39.1,38.24l-1.31,1.21L37,38.73a3.4,3.4,0,0,1-2.34.31,3,3,0,0,1-2.12-1.68.77.77,0,0,0-.95-.56,1.33,1.33,0,0,1-.34,0V35.13h1a3.4,3.4,0,0,1,2.35-2.37v-1h1.63s.05.06.05.08a1.12,1.12,0,0,0,.76,1.32,3.19,3.19,0,0,1,1.12,4.45Zm-3.69-4.18a1.85,1.85,0,0,0,0,3.7,1.85,1.85,0,1,0,0-3.7Z" transform="translate(-3.32 -3.9)"/><path d="M41.32,40.79l-1.08,1L39.17,40.6l1.1-1Z" transform="translate(-3.32 -3.9)"/><path d="M42.62,44.22l-1.14-1.15,1.23-1.14,1,1.17Z" transform="translate(-3.32 -3.9)"/><path d="M36.3,21.61v1.63H34.67V21.61Z" transform="translate(-3.32 -3.9)"/><path d="M34.66,26.62V25h1.63v1.62Z" transform="translate(-3.32 -3.9)"/><path d="M36.29,30H34.66V28.38h1.63Z" transform="translate(-3.32 -3.9)"/><path d="M22.75,36.78H21.13V35.15h1.62Z" transform="translate(-3.32 -3.9)"/><path d="M24.52,35.13h1.62v1.65H24.52Z" transform="translate(-3.32 -3.9)"/><path d="M27.88,36.78V35.15h1.64v1.63Z" transform="translate(-3.32 -3.9)"/><path d="M11,35.13H12.6v1.65H11Z" transform="translate(-3.32 -3.9)"/><path d="M14.36,35.14H16v1.63H14.36Z" transform="translate(-3.32 -3.9)"/><path d="M34.66,11.44h1.63v1.64H34.66Z" transform="translate(-3.32 -3.9)"/><path d="M34.67,14.83H36.3v1.63H34.67Z" transform="translate(-3.32 -3.9)"/></svg>
                                        </div>
                                        <p className='blue-div-p'>
                                          Blockchain Development
                                        </p>
                                </div>

                              <div  className='overlay-div blockchain-dev'>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                              </div>
                        </div>
                        

                      <div className=' blue-div blockchain-dev'>
                      <div className='blue-div-inner'>
                          <div className='svg-div'>
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.33 469.34"><title>wallet</title><path d="M469.33,258V192a42.58,42.58,0,0,0-39.27-42.32l-61.26-107a42.19,42.19,0,0,0-57.91-15.6l-210,122.26H64A42.71,42.71,0,0,0,21.33,192V448A42.72,42.72,0,0,0,64,490.67H426.67A42.71,42.71,0,0,0,469.33,448V382a32,32,0,0,0,21.34-30V288A32,32,0,0,0,469.33,258ZM227.79,149.34,360.9,71.84l10.53,18.39L269.9,149.34ZM382,108.74l23.24,40.6h-93Zm-60.4-63.23a20.62,20.62,0,0,1,15.84-2.13,20.92,20.92,0,0,1,12.81,9.9l0,0-164.91,96H143.28Zm105,423.83H64A21.36,21.36,0,0,1,42.67,448V192A21.36,21.36,0,0,1,64,170.67H426.67A21.36,21.36,0,0,1,448,192v64H384a64,64,0,0,0,0,128h64v64A21.36,21.36,0,0,1,426.67,469.34ZM469.33,352a10.67,10.67,0,0,1-10.66,10.67H384a42.67,42.67,0,1,1,0-85.33h74.67A10.67,10.67,0,0,1,469.33,288Z" transform="translate(-21.33 -21.33)"/><path d="M384,298.67A21.34,21.34,0,1,0,405.33,320,21.36,21.36,0,0,0,384,298.67Z" transform="translate(-21.33 -21.33)"/></svg>
                          </div>
                          <p className='blue-div-p'>
                            Cryptocurrency Wallet Development
                          </p>
                        </div>
                        <div  className='overlay-div blockchain-dev'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        </div>
                        </div> 
                    </div>
                    <div className='col-sm-5 no-padding-left'>
                    <div className='blue-div hyperledger'>
                    <div className='blue-div-inner'>
                       <div className='svg-div'>
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 689.72 680.01"><title>HyperLedger</title><path d="M195.88,750.4c-13.58-6.39-16.64-11.93-15.49-27.13.12-1.61-1.18-3.68-2.4-5q-31.31-33.66-62.78-67.17Q60,592.29,4.67,533.52c-8.44-9-16.82-18-25.43-26.84a10,10,0,0,0-5.81-2.78c-10.92-.92-19.86-8.73-20.52-18.33-1-15.32,4.57-23.67,17.36-26.57a7.21,7.21,0,0,0,4.37-4.27q18.31-60,36.27-120.11,21.36-71.21,42.72-142.4c1.08-3.59,1-6-1.86-9.08C40.41,171,47.29,149.38,63.45,145.86c7.21-1.57,13.48.84,18.5,6.14,1.92,2,3.48,2.49,6.43,1.79,52.24-12.32,104.55-24.32,156.8-36.6q62.57-14.7,125-30a8.65,8.65,0,0,0,5.21-4.14c2.94-6.56,8.26-10,14.48-12.68h9c12.11,4.5,16.91,13.42,16.15,26a9.79,9.79,0,0,0,2.3,6.57q53,57.11,106.35,114Q568.76,265,614,313c2.59,2.76,5.1,4.41,9.28,4.51,12,.28,19.68,10,19.23,23.82-.36,11-6.35,18-17.12,20.38-3.31.72-3.72,2.79-4.42,5.12q-15.44,50.85-30.82,101.7-24.21,80.51-48.35,161c-.95,3.15-.91,5.24,1.38,8,6.34,7.71,7.34,16.64,3.36,25.74-3.38,7.71-9.73,11.64-18.13,12-5.58.25-10.69-1.39-14.49-5.53-2.27-2.48-4.42-2.77-7.46-2.06q-117.09,27.54-234.21,55-23.75,5.58-47.36,11.68a9.31,9.31,0,0,0-5.31,4.2c-3,5.87-8,9.2-13.7,11.77ZM274.74,303a58.77,58.77,0,0,0-5.66,4.27c-26.35,24.73-52.6,49.57-79,74.21-3.12,2.91-3.83,5.65-2.88,9.62q10.71,44.74,21.09,89.56c.81,3.5,2.27,5.15,5.79,6.19q51,15.15,101.89,30.74c3.1,1,5.09.42,7.42-1.78q41.56-39.3,83.33-78.39c2.06-1.93,2.66-3.6,2-6.48Q398,386.54,387.76,342.07c-1-4.21-2.95-6-6.92-7.16-29.51-8.72-58.95-17.65-88.41-26.53C286.85,306.69,281.3,305,274.74,303ZM349.07,620.6a38.7,38.7,0,0,0,5.05-2.63q34.28-23.73,68.43-47.65c1.54-1.08,3.57-3.34,3.31-4.63-.31-1.5-2.71-3.14-4.51-3.69-31-9.47-62.1-18.74-93.13-28.18-3.06-.93-5.22-.66-7.62,1.62-21.77,20.6-43.7,41-65.4,61.71-1.48,1.41-2.22,4.44-1.92,6.52.16,1.12,3.2,2.29,5.08,2.6,16,2.66,32.12,5.12,48.18,7.64C320.3,616.09,334.08,618.25,349.07,620.6ZM247.23,200.23a19.33,19.33,0,0,0-3.31,1.61q-35.89,24.9-71.69,49.94c-1.14.8-2.36,2.6-2.23,3.79s1.91,2.41,3.21,2.81q48,14.63,96.12,28.94a6.18,6.18,0,0,0,5.08-1.15Q307.86,255,341,223.57c1.25-1.19,2-4.95,1.24-5.78a13.7,13.7,0,0,0-7.16-3.67c-16-2.74-32.11-5.17-48.17-7.7ZM530,624.45l1.52.08L610.4,363.26l-1.4-.7c-1.45,1.71-3,3.38-4.35,5.15q-44.19,56.1-88.3,112.27c-1.15,1.47-2.34,3.59-2.19,5.29,1.15,12.38,2.61,24.73,4,37.08q3.32,29.14,6.69,58.27Q527.41,602.55,530,624.45ZM-14.47,456.83l.88.46c1-1.07,2-2.09,2.9-3.22q44.34-56.29,88.77-112.52c3.06-3.84,3.55-7.59,3-12-1.93-16.33-3.91-32.66-5.75-49-2.8-24.92-5.48-49.86-8.28-74.78-.35-3.16-1.09-6.27-1.65-9.41H64.12Q24.83,326.61-14.47,456.83Zm495.74-72.06a17.16,17.16,0,0,0-1.46,1.13c-18.43,17.33-36.76,34.75-55.35,51.91-3.08,2.84-3.37,5.42-2.49,9.08,6.59,27.37,13.3,54.73,19.39,82.21,1.41,6.34,2.95,11,10.38,10.55,1.52-.09,3.58-.42,4.39-1.44,14.84-18.61,29.61-37.27,44.11-56.13a13.14,13.14,0,0,0,2.34-8.57c-2.65-25.48-5.83-50.91-8.39-76.39-.52-5.14-1.63-8.32-7.18-9.17C485,387.64,483.26,385.92,481.27,384.77Zm-307.52-4.44c-.45-2.08-.71-3.38-1-4.68-7-29.46-13.87-58.93-21-88.36-.41-1.69-2.16-4.2-3.45-4.3-3.31-.27-6.65-3.3-10.14,1.3-14.6,19.23-29.78,38-44.54,57.13-1.3,1.68-1.6,4.52-1.53,6.8.14,4.62.85,9.21,1.34,13.82,1.08,10,2.15,20.07,3.27,30.11,1.23,11,2.61,22,3.72,33,.41,4,.7,7.6,6,7.89a8.35,8.35,0,0,1,4.39,2.2c2.38,2,4.06,1.15,6-.67q27.27-25.69,54.61-51.32A22,22,0,0,0,173.75,380.33Zm9.57,324.47,1.18-.47c-.49-1.68-.87-3.4-1.48-5Q160.45,638,137.89,576.6a13.09,13.09,0,0,0-7.56-7.91Q79.54,545.4,28.83,521.9,14.25,515.17-.36,508.49c-.13.23-.26.45-.38.68ZM411.75,116.44l-.64.65c.14.45.26.91.43,1.36q23.31,63.51,46.58,127a12.94,12.94,0,0,0,7.35,8c31.71,14.5,63.33,29.21,95,43.82,11.67,5.38,23.37,10.68,35.06,16l.57-.83ZM215.47,593.62c7.26-2.82,7-7.43,5.5-13.42-6.61-26.76-12.8-53.63-19-80.5-.76-3.29-2.49-4.72-5.45-5.59-9.89-2.88-19.74-5.89-29.61-8.84-16.23-4.85-32.45-9.78-48.74-14.42A8.52,8.52,0,0,0,112,472c-.82.53-.62,3.56,0,5.16,9.49,26.13,19.16,52.19,28.65,78.32a10.33,10.33,0,0,0,6.1,6.5c11.68,5.16,23.21,10.64,34.81,16S204.64,588.61,215.47,593.62ZM478.53,350.47c4.23.49,5.8-1.86,4.33-5.87-9.81-26.66-19.55-53.35-29.61-79.91a13.07,13.07,0,0,0-6.13-6.45c-21-10-42.25-19.59-63.39-29.34-2.56-1.18-4.69-2.58-7.67-.14-3.22,2.64-4.26,5.28-3.29,9.28,6.64,27.32,13.29,54.64,19.55,82,.86,3.74,2.4,5.23,5.73,6.22,19.69,5.83,39.34,11.8,59,17.72C464.36,346.23,471.66,348.41,478.53,350.47Zm13.93,306.61c-3-.7-4.63-1.16-6.24-1.41-43.05-6.81-86.12-13.53-129.15-20.49a12.77,12.77,0,0,0-10.2,2.24q-51.57,36-103.26,71.93c-3.29,2.29-6.45,4.76-9.67,7.15.21.39.42.78.62,1.17ZM104.09,164.17c0,.38.07.75.11,1.13Q133.62,170,163,174.64c22.09,3.53,44.14,7.31,66.27,10.52,5.4.78,10.87,3.72,16.67-.38C275,164.25,304.32,144,333.52,123.67l27.26-19c-.12-.27-.25-.53-.37-.8Q232.25,134,104.09,164.17ZM-8,475.42a29.09,29.09,0,0,0,3.91,0c26.52-5.89,53-11.92,79.57-17.6,3.79-.81,5.16-2.21,4.81-5.86A16.22,16.22,0,0,1,88,436.17c4.27-2.77,4.93-5.7,3.62-10a16.08,16.08,0,0,1-.31-3Q88.14,394,85,364.78c-.34-3.11-.92-6.2-1.49-9.94-1.14,1-1.55,1.3-1.84,1.66Q37.89,412-5.73,467.64C-7.13,469.44-7.13,472.33-8,475.42Zm608.9-129.36L516,364.84c-.21,7.82-1.13,15.36-7.59,19.69-5.16,3.46-4.77,7.49-4.17,12.34,1.32,10.52,2.5,21.07,3.69,31.61q2.1,18.67,4.11,37.35l1.3.87a21.91,21.91,0,0,1,1.67-3q42.69-54.39,85.48-108.7C602.68,352.25,603.84,349.8,600.92,346.06ZM378.15,108.39l-116.48,81c.49.65.57.85.67.87q38.52,6.14,77,12.27c2.88.46,4.91-.21,6.67-2.9a17.12,17.12,0,0,1,13.16-8c2.65-.23,3.5-1.28,4.15-3.81q9.16-35.68,18.74-71.27C383.17,112.48,381.53,110.34,378.15,108.39ZM334.56,631.57c-27.77-4.27-54.21-8.38-80.67-12.3-1.19-.18-3.07,1-3.86,2.06-3.52,4.86-8.25,7.5-13.94,9a6,6,0,0,0-3.78,3.35C226,657.3,220.1,681,213.78,704.62c-1.12,4.2-.17,6.6,3.76,8.43ZM-7.24,489.32c0,.48,0,1,0,1.44l135.76,62.69a27.92,27.92,0,0,0-.71-3.91c-8.66-23.57-17.29-47.15-26.19-70.64-.63-1.67-3.15-2.83-5-3.8-2.76-1.43-6.11-2-8.5-3.82a9.64,9.64,0,0,0-8.78-1.91q-40.35,9-80.72,18C-3.35,487.85-5.27,488.67-7.24,489.32ZM602.15,331.88c.13-.64.25-1.28.38-1.91L466.44,267.08c.84,2.64,1.09,3.57,1.42,4.47,8.6,23.31,17.27,46.6,25.75,69.95,1,2.71,2.18,3.65,5.11,4.17,3.27.58,6.2,2.91,9.38,4.21,1.92.79,4.21,1.85,6,1.46,22-4.7,44-9.64,66-14.52ZM412.75,449l-78.39,73.69c2.1.82,3.39,1.43,4.76,1.84,26.63,8,53.29,15.93,79.88,24.09,5.08,1.56,8.7,2.3,12.3-3.29,2.12-3.29,3-5.53,2.14-9.25-4.59-18.87-8.9-37.81-13.36-56.71C417.77,469.54,415.36,459.78,412.75,449ZM183,372.33l77.57-73c-.7-.55-.91-.83-1.18-.91q-44.1-13.36-88.23-26.68c-.91-.27-2.37-.57-2.84-.11-2.35,2.32-4.83,4.66-6.46,7.46-.78,1.34,0,3.77.46,5.63q7.31,31.44,14.73,62.86C178.92,355.62,180.88,363.6,183,372.33Zm43.34-174.09c0-.43,0-.87,0-1.3-7-1.06-14-2.1-21.07-3.2q-56.81-8.94-113.6-17.82c-1.6-.25-4.63.41-4.85,1.22a6.85,6.85,0,0,0,1.09,5.49c16.3,18.45,32.79,36.74,49.19,55.11,1.68,1.88,3,2.86,5.84,1.77,5.71-2.21,11.33-1.23,16.85,1.43a6.64,6.64,0,0,0,5.53-.45c8.08-5.26,15.95-10.82,23.87-16.32Q207.77,211.24,226.33,198.24ZM368.1,623a36.06,36.06,0,0,0,4.11,1.3c11.46,1.79,22.94,3.49,34.4,5.31,32.58,5.18,65.14,10.43,97.72,15.56,1.3.21,2.74-.46,4.12-.73-.58-1.37-.86-3-1.79-4.06Q481.37,612.07,455.85,584c-1.25-1.37-3.89-1.68-6-2-4.51-.8-9.33-.61-13.51-2.18-3.11-1.17-5.08-1.12-7.63.67-14.83,10.42-29.74,20.73-44.6,31.11C379,615.14,374,618.81,368.1,623Zm14.19-301.49a39.31,39.31,0,0,0-.45-4.59c-5.66-24.09-11.54-48.13-16.91-72.28-1.38-6.22-3.34-10.35-10.32-11.73-3.53-.7-5.65-.79-8.31,1.73-18.72,17.75-37.6,35.35-56.41,53-1.36,1.28-2.6,2.68-4.51,4.66Zm-137,267.59,64.59-60.77-97.09-29.15c1.94,8.38,3.54,15.31,5.16,22.23,4.72,20.16,9.4,40.32,14.25,60.44a6.91,6.91,0,0,0,3.1,4.27C238.2,587.45,241.49,588,245.27,589.08ZM445.1,243.83a12.29,12.29,0,0,0-.13-1.6q-22.73-62-45.56-124c-.45-1.23-2.78-2.78-3.84-2.53-1.66.39-3.9,2-4.3,3.45q-9.56,35.38-18.53,70.91a6.51,6.51,0,0,0,1.87,5.42,20.34,20.34,0,0,1,7.8,16c.06,2.87,1.09,4.06,3.46,5.14,14.66,6.68,29.26,13.48,43.88,20.23C434.66,239.07,439.6,241.31,445.1,243.83ZM202.72,704.93c6.65-25.56,13.34-51.29,20-76.95-6.73-4.58-10.14-10.44-10.5-18.24-.07-1.59-1.93-3.76-3.51-4.51-18.33-8.7-36.75-17.19-55.17-25.7a42.21,42.21,0,0,0-4.12-1.36c.57,2.11.85,3.53,1.34,4.87,14.43,39.17,28.95,78.32,43.23,117.55C195.57,704.87,197.68,706.46,202.72,704.93ZM505.07,496.4l-1.55-.64c-.53.84-1,1.74-1.61,2.52C489.57,514,477.15,529.63,465,545.45c-1,1.34-1.12,4-.62,5.83,1.82,6.63,2,13.15-.73,19.47-1.11,2.61-.61,4.2,1.15,6.14,15.51,17.17,30.88,34.46,46.5,51.53,1.71,1.87,2.74,6.22,6.74,4.32s1.65-5.64,1.36-8.43c-3.4-31.77-7-63.51-10.52-95.26C507.63,518.16,506.33,507.28,505.07,496.4Zm-415.34-170,42-53.35A28.13,28.13,0,0,1,131,249.7a5,5,0,0,0-.68-4.27q-24.84-28-50-55.74c-.8-.89-3-1.71-3.67-1.26a5.14,5.14,0,0,0-2.15,3.83c.13,4,.83,7.88,1.28,11.82,1.21,10.5,2.46,21,3.61,31.52,1.13,10.36,2.13,20.73,3.26,31.09,1.19,10.83,2.45,21.66,3.71,32.48C87.46,307.8,88.53,316.43,89.73,326.44Zm87.36,67.78c-2.41,2-4,3.25-5.41,4.6Q148.79,420.38,125.93,442c-3.31,3.12-6.66,5.54-5.94,11.47.47,3.88,1,5.38,4.67,6.45,16.05,4.68,32,9.68,48,14.5,8,2.41,16,4.71,25,7.32Zm240.35,32.89,9.05-8.51q23.11-21.69,46.22-43.38a8.19,8.19,0,0,0-3.17-13.58q-25.53-7.69-51.08-15.32c-6.76-2-13.51-4.08-21.54-6.51C403.86,369.38,410.53,397.75,417.44,427.11Z" transform="translate(47.21 -70.39)"/></svg>
                          </div>
                          <p className='blue-div-p'>
                          HyperLedger Development
                          </p>
                      </div>
                      <div  className='overlay-div hyperledger'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-12'>
                    <div className='blue-div smrt-contract-dev'>
                        <div className='blue-div-inner'>
                        <div className='svg-div'>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 853.38 853.42"><title>Smart Contract Development</title><path d="M240.62-24V-205.82c0-6.87,0-6.87-7.08-6.87h-136c-12.47,0-16.9-4.4-16.9-16.81,0-45.83-.07-91.66.11-137.49,0-4.72-1.44-5.76-5.91-5.76q-215.47.17-431,.1c-11.94,0-16.53,4.67-16.53,16.77q0,383.24,0,766.46c0,12,4.59,16.58,16.65,16.58H224c12.12,0,16.65-4.49,16.65-16.56q0-80,.11-160a22.32,22.32,0,0,1,2.53-9.87c6.86-13.14,14.08-26.09,21.19-39.1a7,7,0,0,1,3.12-3.14v4.7q0,104,0,208c0,26.05-16.9,42.78-42.92,42.79H-356.84c-25.82,0-42.53-16.69-42.54-42.49q0-385,0-770c0-23.42,17.26-40.88,40.63-40.88q225.24,0,450.48-.08a18.19,18.19,0,0,1,13.76,5.72q78.21,78.39,156.6,156.61a17.81,17.81,0,0,1,5.52,13.38q-.08,74.74-.05,149.5a9.89,9.89,0,0,1-.62,4.38c-8.24,15.4-16.6,30.73-24.92,46.09ZM220.05-239.48l-1,.6L107.68-350.7a9.47,9.47,0,0,0-.16,1.63c0,35.16,0,70.32-.1,105.47,0,4.3,2.12,4.34,5.27,4.33q51.74-.09,103.48,0C217.46-239.31,218.76-239.42,220.05-239.48Z" transform="translate(399.39 399.44)"/><path d="M-9.16,280c-3.86,1.44-6.56,1.9-8.61,3.31q-21.62,14.81-43,29.95c-14.53,10.26-28.75,21-43.6,30.78-5.12,3.36-11.59,5.11-17.7,6.42-9.53,2.05-16.67-3-19.11-12.39s-1-18.44,3-26.8a301,301,0,0,1,16.61-30.12c7.85-12.57,16.61-24.56,24.67-37,2.43-3.75,3.86-8.15,5.75-12.25l-1.31-1.26c-3.38,1.13-6.85,2-10.11,3.44-26.83,11.5-50.91,27.41-73.94,45.24-20.4,15.79-41.33,30.93-62.58,45.56-10.51,7.23-21.9,13.45-34.93,15.46a38.5,38.5,0,0,1-6,.54c-17.53,0-26.88-12.08-22-28.9,3.83-13.27,12.16-24,21.08-34.19,15.46-17.58,33.74-30.7,57.59-34.22,3.46-.52,8.37-2.31,9.53,2.2.66,2.53-1.94,7.06-4.41,9-4.06,3.13-9,6-13.93,7-20.41,4.08-45.06,27.23-48.25,46.21a24,24,0,0,0-.41,3.47c-.19,10,4.68,13.89,14.23,11.1,12.25-3.57,22.18-11.36,32.31-18.62,26.94-19.31,53.37-39.38,80.74-58.06,15.9-10.85,33-20.06,50-29.08,6.27-3.32,13.85-5,21-5.65,11.7-1,17.6,6.34,12.94,17-5.16,11.79-12.09,22.91-19,33.8-10.61,16.59-21.27,33.08-27.83,51.8a47.24,47.24,0,0,0-2,8.22c-1.11,7.08,2.13,10.48,9.09,8.65,5.06-1.34,10.32-3.32,14.46-6.4C-86.23,317.7-78,310.57-70,303.33c15.5-14,31.37-27.51,50.15-36.9a65.59,65.59,0,0,1,20.3-6.27c8.74-1.18,14.17,5.14,13,14a73.39,73.39,0,0,1-3.55,13.48c-5,14.62.47,26.71,15.52,29.9,10.74,2.28,22.38,3.45,33.13,1.85,22-3.27,43.7-8.68,65.46-13.5,1.3-.28,2.6-3,3-4.75,4.59-22.51,8.48-45.16,13.6-67.54,5.65-24.72,17-47.15,29.24-69.27C197.12,114.73,224,64.86,251,15.11c.62-1.15,1.34-2.24,2.31-3.84l64.82,35.19a26.94,26.94,0,0,1-1.25,3.28q-45.56,83.88-91.18,167.71c-13.52,24.74-32.72,44.9-53.32,63.74-11.92,10.89-24.56,21-36.85,31.48a62.41,62.41,0,0,1-21.61,12.05C88.2,333,62.4,341,35,340.73c-12.82-.11-25.22-2.3-36.09-9.85-11.56-8-15.21-17.27-12.23-31.1C-12,293.67-10.75,287.54-9.16,280Z" transform="translate(399.39 399.44)"/><path d="M416.07-132.76C387.83-80.79,360.2-30,332.42,21.17L267.09-14.31c5.18-9.58,10.13-18.78,15.12-28q49-90.22,98-180.45c5.9-10.87,12.87-13.22,23.86-8,.72.35,1.49.61,2.74,1.11C412-239,417-248.37,422.12-257.66c3.72-6.73,10.38-9.75,17.17-8,9.58,2.53,14,12.83,9.17,21.92-5,9.42-10.15,18.73-15.48,28.54,2.56,1.46,5,2.85,7.39,4.21,8.32,4.66,10.92,12.82,6.56,21.23-3.68,7.09-7.43,14.16-11.5,21-1.83,3.11-1.77,5.36.09,8.55,11.76,20.21,18.91,41.81,18.46,65.51a80,80,0,0,1-9.49,36.92q-35,64.61-70.08,129.1c-2.31,4.26-5.07,7.82-9.88,9.33a14.86,14.86,0,0,1-15.85-4.59c-4.33-5.37-4.71-11.27-1.49-17.29,6.94-12.91,14-25.76,21-38.64,15.51-28.53,30.48-57.38,46.71-85.5C427.68-87.44,425.57-109.11,416.07-132.76Z" transform="translate(399.39 399.44)"/><path d="M-66-158.92q105.47,0,210.93.14a20.67,20.67,0,0,1,11.09,3.3c4.57,3.17,5.87,8.37,4.12,13.86s-5.61,8.54-11.2,9.41a33.29,33.29,0,0,1-5,.11H-275.93a43.83,43.83,0,0,1-5-.1,13.53,13.53,0,0,1-11.87-13.32,13.41,13.41,0,0,1,11.86-13.29,47.82,47.82,0,0,1,5.49-.1Z" transform="translate(399.39 399.44)"/><path d="M-66-79H143c1.67,0,3.34-.07,5,0A13.46,13.46,0,0,1,160.78-66a13.39,13.39,0,0,1-11.42,13.65,32.26,32.26,0,0,1-5.48.28Q-66-52.06-276-52.16a24.64,24.64,0,0,1-10.94-2.5c-4.83-2.5-6.76-8.63-5.49-13.89a13.31,13.31,0,0,1,11.53-10.3,50.2,50.2,0,0,1,5.49-.1Z" transform="translate(399.39 399.44)"/><path d="M-66,1.07H145.41c10.17,0,17,7.11,15.17,15.83a13.58,13.58,0,0,1-12.12,10.91c-1.82.17-3.66.08-5.5.08H-276.92c-9.71,0-15.84-5.21-15.88-13.41S-286.63,1.07-277,1.07Z" transform="translate(399.39 399.44)"/><path d="M-142.39,81H-7.9c8.2,0,13.57,3.83,15,10.5A13.37,13.37,0,0,1-4,107.71a34.46,34.46,0,0,1-5.48.22H-276a37.66,37.66,0,0,1-5-.17A13.48,13.48,0,0,1-292.8,94.41a13.46,13.46,0,0,1,11.93-13.25,43.67,43.67,0,0,1,5.49-.12Z" transform="translate(399.39 399.44)"/><path d="M-145.89-239q65.71,0,131.43,0c9.17,0,15.24,5.49,15.19,13.56A13.34,13.34,0,0,1-10.75-212.3a31.78,31.78,0,0,1-5,.24H-276.09c-.83,0-1.66,0-2.5,0-8.39-.3-14.31-6-14.21-13.61s6-13.25,14.49-13.28c21.15,0,42.31,0,63.46,0Z" transform="translate(399.39 399.44)"/></svg>
                              </div>
                              <p className='blue-div-p'>
                                Smart Contract Development
                              </p>
                          </div>
                         
                          <div  className='overlay-div smrt-contract-dev'>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-sm-5'>
                <div className='row'>
                    <div className='col-sm-12 no-padding-left'>
                    
                        <div className='blue-div blockchain-dev'>
                        <div className='blue-div-inner'>
                            <div className='svg-div'>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 853.38 853.42"><title>Smart Contract Development</title><path d="M240.62-24V-205.82c0-6.87,0-6.87-7.08-6.87h-136c-12.47,0-16.9-4.4-16.9-16.81,0-45.83-.07-91.66.11-137.49,0-4.72-1.44-5.76-5.91-5.76q-215.47.17-431,.1c-11.94,0-16.53,4.67-16.53,16.77q0,383.24,0,766.46c0,12,4.59,16.58,16.65,16.58H224c12.12,0,16.65-4.49,16.65-16.56q0-80,.11-160a22.32,22.32,0,0,1,2.53-9.87c6.86-13.14,14.08-26.09,21.19-39.1a7,7,0,0,1,3.12-3.14v4.7q0,104,0,208c0,26.05-16.9,42.78-42.92,42.79H-356.84c-25.82,0-42.53-16.69-42.54-42.49q0-385,0-770c0-23.42,17.26-40.88,40.63-40.88q225.24,0,450.48-.08a18.19,18.19,0,0,1,13.76,5.72q78.21,78.39,156.6,156.61a17.81,17.81,0,0,1,5.52,13.38q-.08,74.74-.05,149.5a9.89,9.89,0,0,1-.62,4.38c-8.24,15.4-16.6,30.73-24.92,46.09ZM220.05-239.48l-1,.6L107.68-350.7a9.47,9.47,0,0,0-.16,1.63c0,35.16,0,70.32-.1,105.47,0,4.3,2.12,4.34,5.27,4.33q51.74-.09,103.48,0C217.46-239.31,218.76-239.42,220.05-239.48Z" transform="translate(399.39 399.44)"/><path d="M-9.16,280c-3.86,1.44-6.56,1.9-8.61,3.31q-21.62,14.81-43,29.95c-14.53,10.26-28.75,21-43.6,30.78-5.12,3.36-11.59,5.11-17.7,6.42-9.53,2.05-16.67-3-19.11-12.39s-1-18.44,3-26.8a301,301,0,0,1,16.61-30.12c7.85-12.57,16.61-24.56,24.67-37,2.43-3.75,3.86-8.15,5.75-12.25l-1.31-1.26c-3.38,1.13-6.85,2-10.11,3.44-26.83,11.5-50.91,27.41-73.94,45.24-20.4,15.79-41.33,30.93-62.58,45.56-10.51,7.23-21.9,13.45-34.93,15.46a38.5,38.5,0,0,1-6,.54c-17.53,0-26.88-12.08-22-28.9,3.83-13.27,12.16-24,21.08-34.19,15.46-17.58,33.74-30.7,57.59-34.22,3.46-.52,8.37-2.31,9.53,2.2.66,2.53-1.94,7.06-4.41,9-4.06,3.13-9,6-13.93,7-20.41,4.08-45.06,27.23-48.25,46.21a24,24,0,0,0-.41,3.47c-.19,10,4.68,13.89,14.23,11.1,12.25-3.57,22.18-11.36,32.31-18.62,26.94-19.31,53.37-39.38,80.74-58.06,15.9-10.85,33-20.06,50-29.08,6.27-3.32,13.85-5,21-5.65,11.7-1,17.6,6.34,12.94,17-5.16,11.79-12.09,22.91-19,33.8-10.61,16.59-21.27,33.08-27.83,51.8a47.24,47.24,0,0,0-2,8.22c-1.11,7.08,2.13,10.48,9.09,8.65,5.06-1.34,10.32-3.32,14.46-6.4C-86.23,317.7-78,310.57-70,303.33c15.5-14,31.37-27.51,50.15-36.9a65.59,65.59,0,0,1,20.3-6.27c8.74-1.18,14.17,5.14,13,14a73.39,73.39,0,0,1-3.55,13.48c-5,14.62.47,26.71,15.52,29.9,10.74,2.28,22.38,3.45,33.13,1.85,22-3.27,43.7-8.68,65.46-13.5,1.3-.28,2.6-3,3-4.75,4.59-22.51,8.48-45.16,13.6-67.54,5.65-24.72,17-47.15,29.24-69.27C197.12,114.73,224,64.86,251,15.11c.62-1.15,1.34-2.24,2.31-3.84l64.82,35.19a26.94,26.94,0,0,1-1.25,3.28q-45.56,83.88-91.18,167.71c-13.52,24.74-32.72,44.9-53.32,63.74-11.92,10.89-24.56,21-36.85,31.48a62.41,62.41,0,0,1-21.61,12.05C88.2,333,62.4,341,35,340.73c-12.82-.11-25.22-2.3-36.09-9.85-11.56-8-15.21-17.27-12.23-31.1C-12,293.67-10.75,287.54-9.16,280Z" transform="translate(399.39 399.44)"/><path d="M416.07-132.76C387.83-80.79,360.2-30,332.42,21.17L267.09-14.31c5.18-9.58,10.13-18.78,15.12-28q49-90.22,98-180.45c5.9-10.87,12.87-13.22,23.86-8,.72.35,1.49.61,2.74,1.11C412-239,417-248.37,422.12-257.66c3.72-6.73,10.38-9.75,17.17-8,9.58,2.53,14,12.83,9.17,21.92-5,9.42-10.15,18.73-15.48,28.54,2.56,1.46,5,2.85,7.39,4.21,8.32,4.66,10.92,12.82,6.56,21.23-3.68,7.09-7.43,14.16-11.5,21-1.83,3.11-1.77,5.36.09,8.55,11.76,20.21,18.91,41.81,18.46,65.51a80,80,0,0,1-9.49,36.92q-35,64.61-70.08,129.1c-2.31,4.26-5.07,7.82-9.88,9.33a14.86,14.86,0,0,1-15.85-4.59c-4.33-5.37-4.71-11.27-1.49-17.29,6.94-12.91,14-25.76,21-38.64,15.51-28.53,30.48-57.38,46.71-85.5C427.68-87.44,425.57-109.11,416.07-132.76Z" transform="translate(399.39 399.44)"/><path d="M-66-158.92q105.47,0,210.93.14a20.67,20.67,0,0,1,11.09,3.3c4.57,3.17,5.87,8.37,4.12,13.86s-5.61,8.54-11.2,9.41a33.29,33.29,0,0,1-5,.11H-275.93a43.83,43.83,0,0,1-5-.1,13.53,13.53,0,0,1-11.87-13.32,13.41,13.41,0,0,1,11.86-13.29,47.82,47.82,0,0,1,5.49-.1Z" transform="translate(399.39 399.44)"/><path d="M-66-79H143c1.67,0,3.34-.07,5,0A13.46,13.46,0,0,1,160.78-66a13.39,13.39,0,0,1-11.42,13.65,32.26,32.26,0,0,1-5.48.28Q-66-52.06-276-52.16a24.64,24.64,0,0,1-10.94-2.5c-4.83-2.5-6.76-8.63-5.49-13.89a13.31,13.31,0,0,1,11.53-10.3,50.2,50.2,0,0,1,5.49-.1Z" transform="translate(399.39 399.44)"/><path d="M-66,1.07H145.41c10.17,0,17,7.11,15.17,15.83a13.58,13.58,0,0,1-12.12,10.91c-1.82.17-3.66.08-5.5.08H-276.92c-9.71,0-15.84-5.21-15.88-13.41S-286.63,1.07-277,1.07Z" transform="translate(399.39 399.44)"/><path d="M-142.39,81H-7.9c8.2,0,13.57,3.83,15,10.5A13.37,13.37,0,0,1-4,107.71a34.46,34.46,0,0,1-5.48.22H-276a37.66,37.66,0,0,1-5-.17A13.48,13.48,0,0,1-292.8,94.41a13.46,13.46,0,0,1,11.93-13.25,43.67,43.67,0,0,1,5.49-.12Z" transform="translate(399.39 399.44)"/><path d="M-145.89-239q65.71,0,131.43,0c9.17,0,15.24,5.49,15.19,13.56A13.34,13.34,0,0,1-10.75-212.3a31.78,31.78,0,0,1-5,.24H-276.09c-.83,0-1.66,0-2.5,0-8.39-.3-14.31-6-14.21-13.61s6-13.25,14.49-13.28c21.15,0,42.31,0,63.46,0Z" transform="translate(399.39 399.44)"/></svg>
                              </div>
                              <p className='blue-div-p'>
                                Smart Contract Development
                              </p>
                         </div>
                         
                         <div  className='overlay-div blockchain-dev'>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                        </div>
                        </div>

                        <div className='blue-div blockchain-dev'>
                        <div className='blue-div-inner'>
                        <div className='svg-div'>
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 391.6 287.6"><title>security</title><path d="M85.52-31.76H83.36V-60.4A57.67,57.67,0,0,0,25.76-118a57.67,57.67,0,0,0-57.6,57.6,7.31,7.31,0,0,0,7.28,7.28,7.31,7.31,0,0,0,7.28-7.28,43.19,43.19,0,0,1,43.12-43.12A43.19,43.19,0,0,1,69-60.4v28.64H-34A18.91,18.91,0,0,0-52.88-12.88V65.76A18.91,18.91,0,0,0-34,84.64H85.44a18.91,18.91,0,0,0,18.88-18.88V-12.88a18.85,18.85,0,0,0-18.8-18.88Zm4.32,97.44A4.3,4.3,0,0,1,85.52,70H-34a4.3,4.3,0,0,1-4.32-4.32V-13A4.3,4.3,0,0,1-34-17.28H85.44A4.3,4.3,0,0,1,89.76-13V65.68Zm0,0" transform="translate(170 118)"/><path d="M27.84,5.92a12,12,0,0,0-13,7,11.7,11.7,0,0,0,3.92,14.48,2.51,2.51,0,0,1,1.12,2.4V45.28a6,6,0,0,0,9,5.2,5.36,5.36,0,0,0,2.88-5.2V29.76A2.67,2.67,0,0,1,33,27.2a11.42,11.42,0,0,0,4.88-9.68A12.11,12.11,0,0,0,27.84,5.92Zm0,0" transform="translate(170 118)"/><path d="M-77.68,22.24h-40.24A26.56,26.56,0,0,0-143.44,3,26.6,26.6,0,0,0-170,29.52a26.6,26.6,0,0,0,26.56,26.56A26.64,26.64,0,0,0-117.92,36.8H-77.6a7.31,7.31,0,0,0,7.28-7.28,7.43,7.43,0,0,0-7.36-7.28Zm-65.76,19.28a12,12,0,0,1-12-12,12,12,0,0,1,12-12,12,12,0,0,1,12,12,12,12,0,0,1-12,12Zm0,0" transform="translate(170 118)"/><path d="M-77.68-20.4h-44.08a14.44,14.44,0,0,1-14.4-14.4V-58.48A26.56,26.56,0,0,0-116.88-84a26.6,26.6,0,0,0-26.56-26.56A26.6,26.6,0,0,0-170-84a26.64,26.64,0,0,0,19.28,25.52V-34.8A28.92,28.92,0,0,0-121.84-5.92h44.16A7.31,7.31,0,0,0-70.4-13.2a7.24,7.24,0,0,0-7.28-7.2ZM-155.52-84a12,12,0,0,1,12-12,12,12,0,0,1,12,12,12,12,0,0,1-12,12,12,12,0,0,1-12-12Zm0,0" transform="translate(170 118)"/><path d="M-77.68,64.88h-44.08a28.92,28.92,0,0,0-28.88,28.88v23.68A26.56,26.56,0,0,0-169.92,143a26.6,26.6,0,0,0,26.56,26.56A26.6,26.6,0,0,0-116.8,143a26.64,26.64,0,0,0-19.28-25.52V93.76a14.44,14.44,0,0,1,14.4-14.4h44.16a7.31,7.31,0,0,0,7.28-7.28,7.54,7.54,0,0,0-7.44-7.2ZM-131.44,143a12,12,0,0,1-12,12,12,12,0,0,1-12-12,12,12,0,0,1,12-12,12,12,0,0,1,12,12Zm0,0" transform="translate(170 118)"/><path d="M195,3a26.64,26.64,0,0,0-25.52,19.28H129.12a7.28,7.28,0,0,0,0,14.56h40.32A26.55,26.55,0,1,0,195,3Zm0,38.56a12,12,0,1,1,12-12,12,12,0,0,1-12,12Zm0,0" transform="translate(170 118)"/><path d="M202.24,117.44V93.76a28.92,28.92,0,0,0-28.88-28.88H129.2a7.28,7.28,0,1,0,0,14.56h44.16a14.44,14.44,0,0,1,14.4,14.4v23.68a26.46,26.46,0,1,0,14.48-.08ZM195,155a12,12,0,1,1,12-12,12,12,0,0,1-12,12Zm0,0" transform="translate(170 118)"/><path d="M129.2-5.92h44.16A28.92,28.92,0,0,0,202.24-34.8V-58.48A26.56,26.56,0,0,0,221.52-84,26.6,26.6,0,0,0,195-110.56,26.6,26.6,0,0,0,168.4-84a26.64,26.64,0,0,0,19.28,25.52V-34.8a14.44,14.44,0,0,1-14.4,14.4H129.12a7.31,7.31,0,0,0-7.28,7.28,7.41,7.41,0,0,0,7.36,7.2ZM183-84a12,12,0,0,1,12-12,12,12,0,0,1,12,12,12,12,0,0,1-12,12,12,12,0,0,1-12-12Zm0,0" transform="translate(170 118)"/></svg>
                           </div>
                          <p className='blue-div-p'>
                            Security, Auditing and Consultation
                          </p>
                        </div>
                          <div  className='overlay-div blockchain-dev'>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='col-sm-6 no-padding-left'>
                    <div className='blue-div smrt-contract-dev'>
                    <div className='blue-div-inner'>
                    <div className='svg-div'>
                           <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.25 439.96"><title>Technical Support</title><path d="M-12,179.35C-3.11,185.83,6.74,189.43,17,192c17.9,4.54,35.66,2,53.57-.29,14.93-1.89,27.78-7,38.69-17.67a40.59,40.59,0,0,1,26.86-12,30.54,30.54,0,0,1,14.68,3.42c6.77,3.56,7.32,10.55,2.35,16.44l-2.45,2.88c.84.88,1.6,1.69,2.38,2.48,4,4.1,4.68,8,.89,12.37a82.7,82.7,0,0,1-13.6,13.12c-12.94,9.38-25.92,18.84-39.68,26.9-6.94,4.06-15.47,6.09-23.55,7.41-25.31,4.13-50.75,7.38-76.11,11.17-11.88,1.77-22.82-1-33.41-5.95-28.37-13.23-56.59-26.78-85.16-39.56-7.91-3.54-16.75-5.18-25.3-7-4.17-.91-6.21-1.84-6.15-6.79.29-25.33.15-50.66.11-76,0-2.59-.1-4.64,3.28-5.62,27.91-8.07,56.17-12.9,85.32-9.36a118.1,118.1,0,0,1,40.7,13.09c14.62,7.67,30,10.76,46.4,12.19s32.69,5.71,49,8.74a9.46,9.46,0,0,1,1.43.45c10.85,3.81,17.73,12.4,16.08,20.09C90.56,175.73,81.06,183.82,68.85,183c-16.6-1.08-33.17-2.7-49.79-3.57C8.72,178.91-1.67,179.35-12,179.35Z" transform="translate(204.14 181.1)"/><path d="M105.56,143.3c-11.44-16.86-29.8-19.87-47.6-23.19-13.54-2.52-27.49-2.82-41.09-5.09-8.25-1.38-16.71-3.57-24.16-7.25-24.67-12.17-50.28-19.3-78-18-1.65.08-3.36-1.12-5-1.72.82-1.77,1.21-4,2.54-5.24,4.65-4.28,9.82-8,14.37-12.39,1.45-1.41,2.65-4.51,2.13-6.3C-75.78,48.63-71,52-87.53,49c-3.44-.63-6.86-1.42-10.32-1.87-3.69-.48-4.5-2.73-4.44-6,.13-6.33.25-12.66.05-19-.12-3.76,1.47-5.52,5-6.09,5.92-.94,11.8-2.15,17.73-3,3.61-.51,5-2.38,6.39-5.75,3.86-9.13.76-14.7-6.75-20.34-12.16-9.12-11.8-9.59-4.08-22.89,1.5-2.59,3.08-5.15,4.38-7.84,1.66-3.43,4.09-3.92,7.41-2.64,5.74,2.21,11.6,4.15,17.3,6.47,3.05,1.24,4.91.38,7.53-1.54,8.33-6.09,8.64-12.61,4.56-21.79-6-13.39-5.28-13.84,7.58-21.14,14.88-8.45,10.64-9.19,22,3.89.22.25.43.51.65.77C-4.27-69.93-4.28-70,8.14-73.37c3-.81,4.45-2.33,4.88-5.43.83-6.1,2.05-12.14,3-18.23.57-3.81,2.55-5.45,6.42-5.35,6.15.16,12.32.16,18.47,0,3.77-.09,5.83,1.11,6.37,5.19A156.59,156.59,0,0,0,50.7-78.54c.49,1.92,2.6,3.93,4.48,4.89,9.29,4.72,15.29,1.53,21.62-6.77,10.55-13.85,7-12.18,21.42-4.24,2.92,1.6,5.71,3.46,8.69,4.93,3.6,1.77,4.12,4.26,2.72,7.79-2.2,5.57-3.92,11.34-6.29,16.84-1.52,3.53-1.09,6,2.09,8.11a3.7,3.7,0,0,1,1.09,1c4.72,7.69,10.91,7.59,18.17,3.81,3.52-1.83,7.44-2.87,11.16-4.34,3.15-1.25,5.38-.47,7.06,2.57,3.14,5.68,6.37,11.32,9.75,16.86,1.94,3.18,1.35,5.49-1.46,7.75-5.06,4.08-10.11,8.19-14.85,12.62a6.57,6.57,0,0,0-1.8,5.35c3.88,14.83.48,13,16.56,15.81,17.37,3,14.51.83,14.55,17.47,0,2,0,4,0,6,.17,8.21-.3,8.75-8.65,10.07-4.77.75-9.52,1.58-14.3,2.3-3.52.52-5.9,1.91-5.92,6a9.73,9.73,0,0,1-1.34,4.76c-2.76,4.55-1.13,7.82,2.57,10.79,4.41,3.55,8.66,7.31,13.12,10.79,2.88,2.24,3.46,4.5,1.51,7.7-3.38,5.54-6.58,11.2-9.73,16.88-1.78,3.21-4,3.9-7.42,2.46-5.37-2.23-11-3.83-16.38-6-3.59-1.47-6-.56-9,1.77-6.93,5.41-9.43,11.21-4.53,19.37,1.93,3.22,2.62,7.17,4.1,10.7C111.5,139.75,110,142.06,105.56,143.3Zm-137-111.8C-31.28,66.19-2.73,95,31.33,94.91c35.13-.12,64-28.9,63.56-63.64C94.48-5.06,64.76-32.4,28.58-31.4-3.62-30.51-31.58-1.76-31.43,31.5Z" transform="translate(204.14 181.1)"/><path d="M-149.65,100.89c-3.57-9-10.12-13.89-19.58-15.1-1-.12-2.2-1.88-2.54-3.1-11-39.53-10.85-79.07,1.47-118.19,16.15-51.24,47.72-90.62,94.05-117.82,31.36-18.41,65.34-27.52,101.88-27.78,56.25-.39,104.64,18.86,145.37,57.21,30.79,29,51.19,64.41,59.39,105.92,14.14,71.56-3.52,134.56-53.42,188.18-.79.85-1.44,1.83-2.66,3.39-1.17-3.83-1.78-6.84-3-9.58a66.32,66.32,0,0,0-4.23-7.29c8.82-12.82,18.32-24.89,26-38,43.48-74.7,27.3-174.9-37.23-232.48-45.14-40.29-98.1-56.91-157.6-47.12-70,11.51-119.21,51.43-146.33,117-19.11,46.19-18.29,93.16-.35,139.82.53,1.38.34,3.05.48,4.58Z" transform="translate(204.14 181.1)"/><path d="M-204.13,161.27q0-26,0-52c0-6.73,2.27-9,8.94-9.07,7.34-.06,14.67,0,22,0,7.55.05,10.14,2.58,10.15,10.32,0,17.49-.14,35-.17,52.48q0,24.75,0,49.49c0,7.13-2.35,9.64-9.5,9.71-7.67.07-15.33,0-23-.05-6.33-.08-8.39-2.11-8.41-8.4C-204.17,196.26-204.13,178.76-204.13,161.27Z" transform="translate(204.14 181.1)"/></svg>
                          </div>
                          <p className='blue-div-p'>
                            Technical Support
                          </p>
                      </div>
                        

                          <div  className='overlay-div smrt-contract-dev'>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                        </div>
                        </div>
                       
                    </div>
                    <div className='col-sm-6 no-padding-left'>
                    <div className='blue-div smrt-contract-dev'>
                        <div className='blue-div-inner'>
                        <div className='svg-div'>
                              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.22 90.3"><title>UX Design Development</title><path d="M-5.37,63.34c0,.15-.12.29-.3.69-2.13-.79-4.27-1.52-6.35-2.38a35.34,35.34,0,0,1-3.73-1.9c-1.83-1-2.05-1.87-1-3.71a7,7,0,0,0-4.47-10.47,6.75,6.75,0,0,0-5.09.76c-1.86,1.06-2.75.82-3.83-1a37.6,37.6,0,0,1-4.08-9.93c-.46-1.87.13-2.82,2-3.18a6.68,6.68,0,0,0,5.42-4.69c1.39-4.11-1.1-8.2-5.48-9.16-1.91-.41-2.58-1.31-1.91-3.17C-33,12-31.75,8.78-30.35,5.66c.77-1.72,1.89-1.91,3.52-.9,4.64,2.87,10,.52,11-4.84A6.66,6.66,0,0,0-17-5c-1.23-1.89-1.08-3,1-3.95,3.19-1.54,6.46-3,9.77-4.18,2.32-.87,3.15-.24,3.75,2.19A6.63,6.63,0,0,0,3-5.59,6.6,6.6,0,0,0,9.94-8.35a8.81,8.81,0,0,0,1.21-2.83c.54-2.06,1.3-2.57,3.37-2a39.29,39.29,0,0,1,9.72,4c1.84,1.05,2.06,2.17.82,3.9a6.83,6.83,0,0,0-.64,7.56A6.4,6.4,0,0,0,31,5.94a10.3,10.3,0,0,0,4-1.54c1.58-.92,2.65-.82,3.63.73,1.44,2.28,1.44,2.28-.5,4.21L25.46,22.06c-.33.33-.67.63-1.17,1.09-1-6.64-4.16-11.65-9.7-15.06a19.24,19.24,0,0,0-13-2.65A20.08,20.08,0,0,0-15.74,24.32,20.28,20.28,0,0,0,2.1,45.3c-.54.59-1,1.13-1.48,1.59A8.37,8.37,0,0,0-1.82,51" transform="translate(34.47 18.57)"/><path d="M19.13,64.47A39.24,39.24,0,0,0,4.71,50c.23-.26.46-.56.72-.82Q34.77,19.87,64.1-9.5c.75-.75,1.39-.87,2.17-.3,1.78,1.28,3.63,2.48,5.27,3.92A34.41,34.41,0,0,1,78.9,2.75a1.71,1.71,0,0,1-.36,2.4Q49.13,34.51,19.75,63.9C19.56,64.1,19.35,64.27,19.13,64.47Z" transform="translate(34.47 18.57)"/><path d="M81.56,2.09A38.77,38.77,0,0,0,67.21-12.35c2-2,3.9-4.07,5.93-6a1.63,1.63,0,0,1,1.52,0,24.89,24.89,0,0,1,4.66,3.11C81.76-13,84-10.4,86.25-7.87a10.55,10.55,0,0,1,1.28,2.28,1.68,1.68,0,0,1-.42,2.15C85.25-1.64,83.44.21,81.56,2.09Z" transform="translate(34.47 18.57)"/><path d="M17.48,66.12A83.92,83.92,0,0,0,9.3,68.51c-2.69,1.07-4.61.72-6.24-1.73A13,13,0,0,0,.4,64.21a1.36,1.36,0,0,1-.48-1.66c1-3.24,1.89-6.49,2.76-9.76.26-1,.74-1.12,1.44-.63,1.7,1.17,3.44,2.31,5,3.64a36.47,36.47,0,0,1,7.22,8.11C16.77,64.57,17.07,65.3,17.48,66.12Z" transform="translate(34.47 18.57)"/><path d="M3.51,70.17l-6.09,1.56L-1,65.48Z" transform="translate(34.47 18.57)"/></svg>
                              </div>
                              <p className='blue-div-p'>
                                UI/UX Design Development
                              </p>
                              
                        </div>
                        <div  className='overlay-div smrt-contract-dev'>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              </p>
                        </div>
                    </div>
                       
                    </div>
                    </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        </div>
      </section>
    
    
      <section className='projects' id='projects'>
        <div  className='projects-bg'>
        <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                      Projects
                  </p>
                    <div className='projects-inner'>
                                <Slider {...settings}>
        <div className='projects-slider'>
          <div className='single-box'>
          <img className='argyle-img' src={ require('../assets/images/argyle-icon.png') } ></img>
          </div>
        </div>
        <div className='projects-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/salpay-icon.png') } ></img>
          </div>
        </div>
        <div className='projects-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/medpay-icon.png') } ></img>
          </div>
        </div>
        <div className='projects-slider'>
          <div className='single-box'>
          <img className='argyle-img' src={ require('../assets/images/argyle-icon.png') } ></img>
          </div>
        </div>
        <div className='projects-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/salpay-icon.png') } ></img>
          </div>
        </div>
        <div className='projects-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/medpay-icon.png') } ></img>
          </div>
        </div>
      </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    



<section className='testimonials'>
        <div  className='testimonials-bg'>
        <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                      testimonials
                  </p>
                    <div className='testimonial-inner'>
                      <Slider {...testimonialSettings}>
                        <div className='testimonial-slider'>
                          <div className='single-box'>
                               <svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m32 8c-13.234 0-24 10.767-24 24s10.766 24 24 24c13.233 0 24-10.767 24-24s-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"/><path d="m28 23h-8c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h5.522c-.423.847-1.106 1.556-1.994 2l-.423.212c-.988.494-1.388 1.695-.894 2.684.351.7 1.057 1.104 1.79 1.104.301 0 .606-.067.894-.212l.422-.211c2.889-1.444 4.683-4.348 4.683-7.577v-8c0-1.104-.896-2-2-2zm-6 4h4v4h-4z"/><path d="m44 23h-8c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h5.522c-.423.847-1.106 1.556-1.993 1.999l-.424.212c-.988.494-1.389 1.695-.895 2.684.352.701 1.058 1.105 1.792 1.105.3 0 .605-.067.893-.211l.424-.212c2.887-1.444 4.681-4.348 4.681-7.577v-8c0-1.104-.896-2-2-2zm-6 4h4v4h-4z"/></svg>
                                              <p>
                                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                              </p>
                                <div className='person-div clearfix'>
                                  <ul className='clearfix'>
                                    <li className='clearfix'>
                                      <div className='img-div'>
                                      <img src={ require('../assets/images/testimonial-rony.png') } ></img>
                                      </div>
                                    </li>
                                    <li className='clearfix pos-relative'>
                                      <div className='abs-name-project-div'>
                                      <p className='name'>
                                        roni baibochaev
                                      </p>
                                      <p className='project'>
                                        cryptoxchange
                                      </p>
                                      </div>
                                      
                                    </li>
                                  </ul>
                                </div>
                                  
                          </div>
                        </div>
                       

                        <div className='testimonial-slider'>
                          <div className='single-box'>
                               <svg id="Layer" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m32 8c-13.234 0-24 10.767-24 24s10.766 24 24 24c13.233 0 24-10.767 24-24s-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"/><path d="m28 23h-8c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h5.522c-.423.847-1.106 1.556-1.994 2l-.423.212c-.988.494-1.388 1.695-.894 2.684.351.7 1.057 1.104 1.79 1.104.301 0 .606-.067.894-.212l.422-.211c2.889-1.444 4.683-4.348 4.683-7.577v-8c0-1.104-.896-2-2-2zm-6 4h4v4h-4z"/><path d="m44 23h-8c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h5.522c-.423.847-1.106 1.556-1.993 1.999l-.424.212c-.988.494-1.389 1.695-.895 2.684.352.701 1.058 1.105 1.792 1.105.3 0 .605-.067.893-.211l.424-.212c2.887-1.444 4.681-4.348 4.681-7.577v-8c0-1.104-.896-2-2-2zm-6 4h4v4h-4z"/></svg>
                                              <p>
                                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                              </p>
                                <div className='person-div clearfix'>
                                  <ul className='clearfix'>
                                    <li className='clearfix'>
                                      <div className='img-div'>
                                      <img src={ require('../assets/images/person.png') } ></img>
                                      </div>
                                    </li>
                                    <li className='clearfix pos-relative'>
                                      <div className='abs-name-project-div'>
                                      <p className='name'>
                                        roni baibochaev
                                      </p>
                                      <p className='project'>
                                        cryptoxchange
                                      </p>
                                      </div>
                                      
                                    </li>
                                  </ul>
                                </div>
                                  
                          </div>
                        </div>
                      
                      </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section className='partners'>
        <div className='partners-inner-bg'>
        <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                  partners
                  </p>

                  <div className='partners-inner'>
                  <Slider {...settings}>
        <div className='partners-slider'>
          <div className='single-box'>
          <img className='credits-img' src={ require('../assets/images/credits-icon.png') } ></img>
            <span>

            </span>
          </div>
        </div>
        <div className='partners-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/EY-icon.png') } ></img>
          <span>
              
            </span>
          </div>
        </div>
        <div className='partners-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/medpay-icon.png') } ></img>
          </div>
        </div>
        <div className='partners-slider'>
          <div className='single-box'>
          <img className='credits-img' src={ require('../assets/images/credits-icon.png') } ></img>
            <span>

            </span>
        </div>
        </div>
        <div className='partners-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/EY-icon.png') } ></img>
          <span>
              
            </span>
          </div>
        </div>
        <div className='partners-slider'>
          <div className='single-box'>
          <img src={ require('../assets/images/medpay-icon.png') } ></img>
          </div>
        </div>
      </Slider>
                  </div>
            </div>
          </div>
        </div>
    </section>


    <section className='technology-stack'>
        <div  className='technology-stack-bg'>
        <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                  technology stack
                  </p>
                    <div className='technology-stack-inner'>
                      <div className='row mar-btm-20'>
                        <div className='col-sm-3'>
                            <div className='tech-stack-box'>
                            <img src={ require('../assets/images/tech-stack-1.png') } ></img>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        <div className='tech-stack-box'>
                            <img className='custom-padding' src={ require('../assets/images/tech-stack-2.png') } ></img>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        <div className='tech-stack-box'>
                            <img src={ require('../assets/images/tech-stack-3.png') } ></img>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        <div className='tech-stack-box'>
                            <img className='ERC-token-img'  src={ require('../assets/images/tech-stack-4.png') } ></img>
                            </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-sm-3'>
                            <div className='tech-stack-box'>
                            <img  className='tron-img' src={ require('../assets/images/tech-stack-5.png') } ></img>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        <div className='tech-stack-box'>
                            <img className='tron-img' src={ require('../assets/images/tech-stack-6.png') } ></img>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        <div className='tech-stack-box'>
                            <img className='meanstack-img' src={ require('../assets/images/tech-stack-7.png') } ></img>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                        <div className='tech-stack-box'>
                            <img src={ require('../assets/images/tech-stack-8.png') } ></img>
                            </div>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </section>


      <section className='team'>
        <div className='team-inner-bg'>
        <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                  team
                  </p>

                  <div className='team-inner'>
                  <Slider {...settings}>
        <div className='team-slider'>
          <div className='single-box'>
              <div>
                  <img src={ require('../assets/images/ceo-img.png') } ></img>
                  <div className='team-overlay-div'>
                      <div className='social-media-icon-bar'>
                      <ul>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_linkedin</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.9,41.09h0v-11c0-5.38-1.16-9.53-7.45-9.53a6.5,6.5,0,0,0-5.88,3.24h-.09V21.06h-6v20h6.21V31.17c0-2.61.5-5.14,3.73-5.14s3.24,3,3.24,5.31v9.75Zm0,0" transform="translate(0.09 -0.09)"/><rect className="cls-2" x="11.49" y="20.97" width="6.22" height="20.03"/><path className="cls-2" d="M14.51,11.09a3.62,3.62,0,1,0,3.6,3.6,3.6,3.6,0,0,0-3.6-3.6Zm0,0" transform="translate(0.09 -0.09)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_twitter</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M43,15.47a14.84,14.84,0,0,1-4,1.1,6.93,6.93,0,0,0,3.08-3.86,14.19,14.19,0,0,1-4.44,1.69,7,7,0,0,0-11.93,6.38,19.81,19.81,0,0,1-14.42-7.32A7.1,7.1,0,0,0,10.31,17a7,7,0,0,0,3.1,5.81A7,7,0,0,1,10.25,22V22a7,7,0,0,0,5.61,6.87,6.82,6.82,0,0,1-1.84.23A5.74,5.74,0,0,1,12.7,29a7.07,7.07,0,0,0,6.53,4.88,14.06,14.06,0,0,1-8.67,3,13.14,13.14,0,0,1-1.67-.1A19.68,19.68,0,0,0,19.62,39.9c12.87,0,19.9-10.66,19.9-19.9,0-.31,0-.61,0-.9A14.21,14.21,0,0,0,43,15.47Z" transform="translate(0.06 -0.04)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_skype</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.09,29.71A14.18,14.18,0,0,0,23.71,12.82,8.29,8.29,0,0,0,11,19.73a8,8,0,0,0,1.13,4.13,14.19,14.19,0,0,0,16.6,16.67,8.44,8.44,0,0,0,3.91,1,8.17,8.17,0,0,0,7.42-11.78Zm-14,6.65c-2.92,0-5.78-.71-7.46-3.12-2.52-3.56.8-5.34,2.43-4,1.35,1.14.93,3.92,4.92,3.92,1.76,0,3.93-.75,3.93-2.5,0-3.51-7.79-1.85-10.88-5.67a4.7,4.7,0,0,1,0-5.67c2.44-3.13,9.58-3.32,12.65-1,2.84,2.2,2.07,5.11-.22,5.11-2.75,0-1.3-3.6-5.75-3.6-3.22,0-4.48,2.29-2.22,3.4,3,1.5,10.91,1,10.91,7,0,4.18-4,6.08-8.35,6.08Zm0,0" transform="translate(0.01 -0.53)"/></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='name-desgn-div'>
                    <p className='name'>
                    Ali Zain
                    </p>
                    <p className='designation'>
                    Cheif Executive Officer<br/>
                        (CEO)
                    </p>
                  </div>
              </div>
          </div>
        </div>
        <div className='team-slider'>
        <div className='single-box'>
              <div>
                  <img src={ require('../assets/images/ceo-img.png') } ></img>
                  <div className='team-overlay-div'>
                      <div className='social-media-icon-bar'>
                      <ul>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_linkedin</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.9,41.09h0v-11c0-5.38-1.16-9.53-7.45-9.53a6.5,6.5,0,0,0-5.88,3.24h-.09V21.06h-6v20h6.21V31.17c0-2.61.5-5.14,3.73-5.14s3.24,3,3.24,5.31v9.75Zm0,0" transform="translate(0.09 -0.09)"/><rect className="cls-2" x="11.49" y="20.97" width="6.22" height="20.03"/><path className="cls-2" d="M14.51,11.09a3.62,3.62,0,1,0,3.6,3.6,3.6,3.6,0,0,0-3.6-3.6Zm0,0" transform="translate(0.09 -0.09)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_twitter</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M43,15.47a14.84,14.84,0,0,1-4,1.1,6.93,6.93,0,0,0,3.08-3.86,14.19,14.19,0,0,1-4.44,1.69,7,7,0,0,0-11.93,6.38,19.81,19.81,0,0,1-14.42-7.32A7.1,7.1,0,0,0,10.31,17a7,7,0,0,0,3.1,5.81A7,7,0,0,1,10.25,22V22a7,7,0,0,0,5.61,6.87,6.82,6.82,0,0,1-1.84.23A5.74,5.74,0,0,1,12.7,29a7.07,7.07,0,0,0,6.53,4.88,14.06,14.06,0,0,1-8.67,3,13.14,13.14,0,0,1-1.67-.1A19.68,19.68,0,0,0,19.62,39.9c12.87,0,19.9-10.66,19.9-19.9,0-.31,0-.61,0-.9A14.21,14.21,0,0,0,43,15.47Z" transform="translate(0.06 -0.04)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_skype</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.09,29.71A14.18,14.18,0,0,0,23.71,12.82,8.29,8.29,0,0,0,11,19.73a8,8,0,0,0,1.13,4.13,14.19,14.19,0,0,0,16.6,16.67,8.44,8.44,0,0,0,3.91,1,8.17,8.17,0,0,0,7.42-11.78Zm-14,6.65c-2.92,0-5.78-.71-7.46-3.12-2.52-3.56.8-5.34,2.43-4,1.35,1.14.93,3.92,4.92,3.92,1.76,0,3.93-.75,3.93-2.5,0-3.51-7.79-1.85-10.88-5.67a4.7,4.7,0,0,1,0-5.67c2.44-3.13,9.58-3.32,12.65-1,2.84,2.2,2.07,5.11-.22,5.11-2.75,0-1.3-3.6-5.75-3.6-3.22,0-4.48,2.29-2.22,3.4,3,1.5,10.91,1,10.91,7,0,4.18-4,6.08-8.35,6.08Zm0,0" transform="translate(0.01 -0.53)"/></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='name-desgn-div'>
                    <p className='name'>
                    Ali Zain
                    </p>
                    <p className='designation'>
                    Cheif Executive Officer<br/>
                        (CEO)
                    </p>
                  </div>
              </div>
          </div>
        </div>
        <div className='team-slider'>
        <div className='single-box'>
              <div>
                  <img src={ require('../assets/images/ceo-img.png') } ></img>
                  <div className='team-overlay-div'>
                      <div className='social-media-icon-bar'>
                      <ul>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_linkedin</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.9,41.09h0v-11c0-5.38-1.16-9.53-7.45-9.53a6.5,6.5,0,0,0-5.88,3.24h-.09V21.06h-6v20h6.21V31.17c0-2.61.5-5.14,3.73-5.14s3.24,3,3.24,5.31v9.75Zm0,0" transform="translate(0.09 -0.09)"/><rect className="cls-2" x="11.49" y="20.97" width="6.22" height="20.03"/><path className="cls-2" d="M14.51,11.09a3.62,3.62,0,1,0,3.6,3.6,3.6,3.6,0,0,0-3.6-3.6Zm0,0" transform="translate(0.09 -0.09)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_twitter</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M43,15.47a14.84,14.84,0,0,1-4,1.1,6.93,6.93,0,0,0,3.08-3.86,14.19,14.19,0,0,1-4.44,1.69,7,7,0,0,0-11.93,6.38,19.81,19.81,0,0,1-14.42-7.32A7.1,7.1,0,0,0,10.31,17a7,7,0,0,0,3.1,5.81A7,7,0,0,1,10.25,22V22a7,7,0,0,0,5.61,6.87,6.82,6.82,0,0,1-1.84.23A5.74,5.74,0,0,1,12.7,29a7.07,7.07,0,0,0,6.53,4.88,14.06,14.06,0,0,1-8.67,3,13.14,13.14,0,0,1-1.67-.1A19.68,19.68,0,0,0,19.62,39.9c12.87,0,19.9-10.66,19.9-19.9,0-.31,0-.61,0-.9A14.21,14.21,0,0,0,43,15.47Z" transform="translate(0.06 -0.04)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_skype</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.09,29.71A14.18,14.18,0,0,0,23.71,12.82,8.29,8.29,0,0,0,11,19.73a8,8,0,0,0,1.13,4.13,14.19,14.19,0,0,0,16.6,16.67,8.44,8.44,0,0,0,3.91,1,8.17,8.17,0,0,0,7.42-11.78Zm-14,6.65c-2.92,0-5.78-.71-7.46-3.12-2.52-3.56.8-5.34,2.43-4,1.35,1.14.93,3.92,4.92,3.92,1.76,0,3.93-.75,3.93-2.5,0-3.51-7.79-1.85-10.88-5.67a4.7,4.7,0,0,1,0-5.67c2.44-3.13,9.58-3.32,12.65-1,2.84,2.2,2.07,5.11-.22,5.11-2.75,0-1.3-3.6-5.75-3.6-3.22,0-4.48,2.29-2.22,3.4,3,1.5,10.91,1,10.91,7,0,4.18-4,6.08-8.35,6.08Zm0,0" transform="translate(0.01 -0.53)"/></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='name-desgn-div'>
                    <p className='name'>
                    Ali Zain
                    </p>
                    <p className='designation'>
                    Cheif Executive Officer<br/>
                        (CEO)
                    </p>
                  </div>
              </div>
          </div>
        </div>
        <div className='team-slider'>
        <div className='single-box'>
              <div>
                  <img src={ require('../assets/images/ceo-img.png') } ></img>
                  <div className='team-overlay-div'>
                      <div className='social-media-icon-bar'>
                      <ul>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_linkedin</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.9,41.09h0v-11c0-5.38-1.16-9.53-7.45-9.53a6.5,6.5,0,0,0-5.88,3.24h-.09V21.06h-6v20h6.21V31.17c0-2.61.5-5.14,3.73-5.14s3.24,3,3.24,5.31v9.75Zm0,0" transform="translate(0.09 -0.09)"/><rect className="cls-2" x="11.49" y="20.97" width="6.22" height="20.03"/><path className="cls-2" d="M14.51,11.09a3.62,3.62,0,1,0,3.6,3.6,3.6,3.6,0,0,0-3.6-3.6Zm0,0" transform="translate(0.09 -0.09)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_twitter</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M43,15.47a14.84,14.84,0,0,1-4,1.1,6.93,6.93,0,0,0,3.08-3.86,14.19,14.19,0,0,1-4.44,1.69,7,7,0,0,0-11.93,6.38,19.81,19.81,0,0,1-14.42-7.32A7.1,7.1,0,0,0,10.31,17a7,7,0,0,0,3.1,5.81A7,7,0,0,1,10.25,22V22a7,7,0,0,0,5.61,6.87,6.82,6.82,0,0,1-1.84.23A5.74,5.74,0,0,1,12.7,29a7.07,7.07,0,0,0,6.53,4.88,14.06,14.06,0,0,1-8.67,3,13.14,13.14,0,0,1-1.67-.1A19.68,19.68,0,0,0,19.62,39.9c12.87,0,19.9-10.66,19.9-19.9,0-.31,0-.61,0-.9A14.21,14.21,0,0,0,43,15.47Z" transform="translate(0.06 -0.04)"/></svg>
                        </li>
                        <li>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_skype</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.09,29.71A14.18,14.18,0,0,0,23.71,12.82,8.29,8.29,0,0,0,11,19.73a8,8,0,0,0,1.13,4.13,14.19,14.19,0,0,0,16.6,16.67,8.44,8.44,0,0,0,3.91,1,8.17,8.17,0,0,0,7.42-11.78Zm-14,6.65c-2.92,0-5.78-.71-7.46-3.12-2.52-3.56.8-5.34,2.43-4,1.35,1.14.93,3.92,4.92,3.92,1.76,0,3.93-.75,3.93-2.5,0-3.51-7.79-1.85-10.88-5.67a4.7,4.7,0,0,1,0-5.67c2.44-3.13,9.58-3.32,12.65-1,2.84,2.2,2.07,5.11-.22,5.11-2.75,0-1.3-3.6-5.75-3.6-3.22,0-4.48,2.29-2.22,3.4,3,1.5,10.91,1,10.91,7,0,4.18-4,6.08-8.35,6.08Zm0,0" transform="translate(0.01 -0.53)"/></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='name-desgn-div'>
                    <p className='name'>
                    Ali Zain
                    </p>
                    <p className='designation'>
                    Cheif Executive Officer<br/>
                        (CEO)
                    </p>
                  </div>
              </div>
          </div>
        </div>
      </Slider>
                  </div>
            </div>
          </div>
        </div>
    </section>


    <section className='careers' id='careers'>
          <div className='careers-bg'>
            <div className='container'>
              <div className='width-adjustment'>
                  <p className='heading'>
                  careers
                  </p>
                  <div className='career-inner'>
                    <p className='main-txt'>
                    We're Hiring! Are you looking for your next big career move? Interested in working with emerging and cutting edge technologies? Want to enhance your skills working with a talented and skillful team? Check out our career page and apply away. If you are smart, motivated and want something more than a job, we'd like to meet you!
                    </p>

                    <div className="gradient-box">
                        <p>View Our Openings</p>
                      </div>
                  </div>
              </div>
           </div>
        </div>
    </section>


    <section className='blogs' id='blogs'>
        <div className='blogs-inner-bg'>
          <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                  news <span className='slash'>/</span> <span className='blogs'>blogs</span>
                  </p>
                    <div className='blogs-inner'>
                    <Slider {...settings}>
                      <div className='blogs-slider'>
                        <div className='single-box'>
                              <div className='bordered-div'>
                                    <img src={ require('../assets/images/blog-1.png') } ></img>
                                    <div className='blog-overlay-div'>
                                    <div className="gradient-box">
                                        <p>Read More</p>
                                    </div>
                                    </div>
                              </div>
                              
                        </div>
                      </div>
                      <div className='blogs-slider'>
                      <div className='single-box'>
                              <div className='bordered-div'>
                                    <img src={ require('../assets/images/blog-1.png') } ></img>
                                    <div className='blog-overlay-div'>
                                    <div className="gradient-box">
                                        <p>Read More</p>
                                    </div>
                                    </div>
                              </div>
                              
                        </div>
                      </div>
                      <div className='blogs-slider'>
                      <div className='single-box'>
                              <div className='bordered-div'>
                                    <img src={ require('../assets/images/blog-1.png') } ></img>
                                    <div className='blog-overlay-div'>
                                    <div className="gradient-box">
                                        <p>Read More</p>
                                    </div>
                                    </div>
                              </div>
                              
                        </div>
                      </div>
                      <div className='blogs-slider'>
                      <div className='single-box'>
                              <div className='bordered-div'>
                                    <img src={ require('../assets/images/blog-1.png') } ></img>
                                    <div className='blog-overlay-div'>
                                    <div className="gradient-box">
                                        <p>Read More</p>
                                    </div>
                                    </div>
                              </div>
                              
                        </div>
                      </div>
                    </Slider>
                    </div>
            </div>
          </div>
       </div>
    </section>

    <section className='contact-us' id='contact-us'>
        <div className='contact-us-inner-bg'>
          <div className='container'>
            <div className='width-adjustment'>
                  <p className='heading'>
                    contact us
                  </p>
                    <div className='contact-us-inner'>
                      <div className='row'>
                        <div className='col-sm-5'>
                          <div className='clearfix main-div-lefty-righty'>
                            <div className='clearfix lefty'>
                            <svg className='address-svg' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.33 512"><title>pin</title><path d="M256,0C161.9,0,85.33,76.56,85.33,170.67a171,171,0,0,0,20.49,81.1L246.67,506.5a10.66,10.66,0,0,0,18.66,0l140.9-254.81a171,171,0,0,0,20.44-81C426.67,76.56,350.1,0,256,0Zm0,256a85.34,85.34,0,1,1,85.33-85.33A85.43,85.43,0,0,1,256,256Z" transform="translate(-85.33)"/></svg>
                                
                            </div>
                            <div className='clearfix righty'>
                            <p className='address'>
                                  Office No.1, 1st Floor, Plaza 44-C,<br/>
                                  Civic Center, Phase 4,<br/>
                                  Bahria Town,<br/>
                                  Islamabad,<br/>
                                  Pakistan
                                  </p>
                            </div>
                          </div>
                          <div className='clearfix main-div-lefty-righty'>
                            <div className='clearfix lefty'>
                            <svg  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.03 29.97"><defs></defs><title>icon_contact</title><path id="icon" class="cls-1" d="M30,23.65a1.46,1.46,0,0,1-.44,1.27l-4.23,4.2a2.65,2.65,0,0,1-.75.54,3.2,3.2,0,0,1-.91.28l-.19,0h-.41a14.31,14.31,0,0,1-2-.2,14.83,14.83,0,0,1-3.3-1,27.71,27.71,0,0,1-4.44-2.43,33,33,0,0,1-5.28-4.44,35.1,35.1,0,0,1-3.69-4.2A29.65,29.65,0,0,1,2.07,14,19,19,0,0,1,.74,10.91a16.39,16.39,0,0,1-.6-2.39A7.51,7.51,0,0,1,0,7q0-.57,0-.63a2.93,2.93,0,0,1,.29-.91,2.17,2.17,0,0,1,.54-.74L5.1.44a1.39,1.39,0,0,1,1-.44,1.26,1.26,0,0,1,.73.23,2,2,0,0,1,.54.59l3.4,6.45a1.54,1.54,0,0,1,.16,1.11,1.93,1.93,0,0,1-.54,1L8.84,11a.53.53,0,0,0-.11.21.67.67,0,0,0,0,.24,5.59,5.59,0,0,0,.57,1.52,13.83,13.83,0,0,0,1.17,1.86,30.62,30.62,0,0,0,4.8,4.79,14.45,14.45,0,0,0,1.87,1.19,4.54,4.54,0,0,0,1.14.46l.4.08a.78.78,0,0,0,.21,0,.59.59,0,0,0,.2-.12l1.81-1.84a2,2,0,0,1,1.34-.5,1.71,1.71,0,0,1,.86.18h0l6.14,3.63A1.6,1.6,0,0,1,30,23.65Z" transform="translate(-0.01 0)"/></svg>
                                   
                            </div>
                            <div className='clearfix righty'>
                                <p className='address'>
                                +92-51-541-1473
                                  </p>
                            </div>
                          </div>
                          <ul>
                            <li>
                            <img className='clutch-logo' src={ require('../assets/images/clutch-logo.png') } ></img>
                            </li>
                            <li>
                            <img className='blockchain-usa' src={ require('../assets/images/blockchain-usa.png') } ></img>
                            </li>
                          </ul>

                          <div className='social-media-icon-bar'>
                  <ul>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_facebook</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M34.12,9H29.73c-4.93,0-8.12,3.27-8.12,8.33v3.85H17.19a.69.69,0,0,0-.69.69v5.57a.69.69,0,0,0,.69.69h4.42V42.18a.69.69,0,0,0,.69.69h5.76a.69.69,0,0,0,.69-.69v-14h5.16a.69.69,0,0,0,.69-.69V21.87a.69.69,0,0,0-.21-.49.66.66,0,0,0-.48-.2H28.75V17.92c0-1.57.37-2.36,2.41-2.36h3a.69.69,0,0,0,.69-.69V9.69A.69.69,0,0,0,34.12,9Zm0,0" transform="translate(0.25 0.02)"/></svg>
                    </li>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_messenger</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M47,15.71c-4.13,5.91-7.38,12.54-12,18-2,2.28-5.88,1.58-6.9.46-7.25-8-13.17-4.28-19.17,1.38-.52.49-3.88,2.44-3.46.15,3.73-5.55,7.22-11.28,11.4-16.46.74-.91,5.18-1.25,6.45.93C27.67,27.72,34,24,40.12,19.67c2.1-1.48,4.63-2.72,6.6-4.23Z" transform="translate(0.61 -0.59)"/></svg>
                    </li>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_whatsapp</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M33.55,29.51v.1c-3.11-1.55-3.44-1.76-3.84-1.15-.28.41-1.1,1.36-1.34,1.64s-.49.3-.92.11A11.53,11.53,0,0,1,24,28.1a12.56,12.56,0,0,1-2.35-2.93c-.42-.72.45-.82,1.24-2.31a.81.81,0,0,0,0-.75c-.11-.21-1-2.29-1.31-3.12s-.69-.72-.95-.72a2.13,2.13,0,0,0-1.94.48c-2.29,2.52-1.71,5.11.25,7.87,3.84,5,5.89,6,9.64,7.24a5.79,5.79,0,0,0,2.66.17,4.39,4.39,0,0,0,2.86-2,3.47,3.47,0,0,0,.25-2c-.1-.19-.38-.29-.81-.48Z" transform="translate(0.18 -0.17)"/><path className="cls-2" d="M37.89,14.06C27,3.53,9,11.17,9,26a16.76,16.76,0,0,0,2.26,8.42l-2.4,8.73,9-2.34a17,17,0,0,0,25-14.8,16.71,16.71,0,0,0-5-11.91ZM40,26A14.11,14.11,0,0,1,18.72,38l-.51-.3L12.9,39.11,14.32,34,14,33.41A14.05,14.05,0,1,1,40,26Z" transform="translate(0.18 -0.17)"/></svg>
                    </li>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_linkedin</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.9,41.09h0v-11c0-5.38-1.16-9.53-7.45-9.53a6.5,6.5,0,0,0-5.88,3.24h-.09V21.06h-6v20h6.21V31.17c0-2.61.5-5.14,3.73-5.14s3.24,3,3.24,5.31v9.75Zm0,0" transform="translate(0.09 -0.09)"/><rect className="cls-2" x="11.49" y="20.97" width="6.22" height="20.03"/><path className="cls-2" d="M14.51,11.09a3.62,3.62,0,1,0,3.6,3.6,3.6,3.6,0,0,0-3.6-3.6Zm0,0" transform="translate(0.09 -0.09)"/></svg>
                    </li>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_twitter</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M43,15.47a14.84,14.84,0,0,1-4,1.1,6.93,6.93,0,0,0,3.08-3.86,14.19,14.19,0,0,1-4.44,1.69,7,7,0,0,0-11.93,6.38,19.81,19.81,0,0,1-14.42-7.32A7.1,7.1,0,0,0,10.31,17a7,7,0,0,0,3.1,5.81A7,7,0,0,1,10.25,22V22a7,7,0,0,0,5.61,6.87,6.82,6.82,0,0,1-1.84.23A5.74,5.74,0,0,1,12.7,29a7.07,7.07,0,0,0,6.53,4.88,14.06,14.06,0,0,1-8.67,3,13.14,13.14,0,0,1-1.67-.1A19.68,19.68,0,0,0,19.62,39.9c12.87,0,19.9-10.66,19.9-19.9,0-.31,0-.61,0-.9A14.21,14.21,0,0,0,43,15.47Z" transform="translate(0.06 -0.04)"/></svg>
                    </li>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_skype</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M40.09,29.71A14.18,14.18,0,0,0,23.71,12.82,8.29,8.29,0,0,0,11,19.73a8,8,0,0,0,1.13,4.13,14.19,14.19,0,0,0,16.6,16.67,8.44,8.44,0,0,0,3.91,1,8.17,8.17,0,0,0,7.42-11.78Zm-14,6.65c-2.92,0-5.78-.71-7.46-3.12-2.52-3.56.8-5.34,2.43-4,1.35,1.14.93,3.92,4.92,3.92,1.76,0,3.93-.75,3.93-2.5,0-3.51-7.79-1.85-10.88-5.67a4.7,4.7,0,0,1,0-5.67c2.44-3.13,9.58-3.32,12.65-1,2.84,2.2,2.07,5.11-.22,5.11-2.75,0-1.3-3.6-5.75-3.6-3.22,0-4.48,2.29-2.22,3.4,3,1.5,10.91,1,10.91,7,0,4.18-4,6.08-8.35,6.08Zm0,0" transform="translate(0.01 -0.53)"/></svg>
                    </li>
                    <li>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><defs></defs><title>icon_telegram</title><circle className="cls-1" cx="26" cy="26" r="25"/><path className="cls-2" d="M22.13,30.4l-.52,7.26a1.8,1.8,0,0,0,1.45-.7l3.46-3.31,7.18,5.26c1.31.73,2.24.35,2.6-1.21L41,15.62h0c.42-1.94-.7-2.7-2-2.23L11.33,24c-1.89.74-1.86,1.79-.32,2.27l7.08,2.2L34.53,18.17c.78-.51,1.48-.23.9.29Z" transform="translate(0.51 -0.26)"/></svg>
                    </li>
                  </ul>
                </div>
                        </div>
                        <div className='col-sm-7'>
                          <div className='form-div-outer'>
                              <p className='u-can-contact-txt'>
                                You can contact with us using this form.
                              </p>
                              <div className='form-div'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                      <input className='contact-us-input' placeholder='Your Name'></input>
                                    </div>
                                    <div className='col-sm-6'>
                                    <input className='contact-us-input' placeholder='Your Email Address'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                    <textarea placeholder='Type in your message...' className='contact-us-input' rows="4"></textarea>
                                    </div>
                                </div>

                                <div className="gradient-box">
                                        <p>send</p>
                                    </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
           </div>
          </div>
    </section>
    

    <section className='bottom-sec'>
        <div className='bottom-sec-inner-bg'>
          <div className='container'>
            <div className='width-adjustment'>
                  <div className='row'>
                      <div className='col-sm-3'>
                            <p className='privacy-policy-p'>
                              <a className='privacy-policy-p' href='/privacy-policy'>Privacy Policy</a>
                            </p>
                      </div>
                      <div className='col-sm-6'>
                      <p className='privacy-policy-p txt-center'>
                      Copyright © 2020 Ideofuzion. All rights reserved.
                        </p>
                      </div>
                      <div className='col-sm-3'>
                      <p className='privacy-policy-p txt-right'>
                      <span onClick={this.scrollToTop}>
                      Back to Top
                        </span>
                      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492.002 492.002"  space="preserve" width="512px" height="512px" class=""><g><g>
	<g>
		<path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844    L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124    c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064    c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132    C494.624,356.041,494.624,338.965,484.136,328.473z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
	</g>
</g></g> </svg>
                        </p>
                      </div>
                  </div>
            </div>
          </div>
        </div>
    </section>
      </div>

     
    );
  }
    
  }
  
  export default MainPage;