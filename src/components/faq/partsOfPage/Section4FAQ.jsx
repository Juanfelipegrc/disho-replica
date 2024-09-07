import React, { useEffect } from 'react'

export const Section4FAQ = () => {


    useEffect(() => {


    

        const accordionButtons = document.querySelectorAll('.accordion-button');

        const handleAriaExpanded = () => {
            accordionButtons.forEach(button => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                if(isExpanded){
                    button.classList.add('text-litle-green');
                }else{
                    button.classList.remove('text-litle-green')
                }
            })
        }
        handleAriaExpanded();

        accordionButtons.forEach(button => {
            button.addEventListener('click', handleAriaExpanded)
        })

        return () => {
            accordionButtons.forEach(button => {
                button.removeEventListener('click', handleAriaExpanded)
            })
        }

    }, [])
    

  return (
    <>
    
    <div className="container-fluid container-lg my-5">
        <h2 className="text-center font-big-2 my-3">Frequently Asked Questions</h2>
        <div className="container-fluid bg-white border rounded-5">
          <div className="accordion border border-0" id="accordionExample">

            <div className="accordion-item border border-0 rounded-5 bg-white">
              <h2 className="accordion-header rounded-5 border border-0 bg-white">
                <button
                  className="accordion-button py-4 shadow-none border border-0 rounded-5 bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="fs-4">
                    When nam ut felis gravida, posuere sem suscipit, tincidunt augue. Donec sagittis odio in dui lacinia fermentum lorem?
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body border border-0">
                  <p className="fw-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    Fusce ornare porttitor ipsum vitae molestie. Donec sed finibus quam, eget varius eros. Cras ac congue leo, ut auctor nibh. Morbi imperdiet ullamcorper erat, eu fermentum nulla iaculis nec. Donec hendrerit eleifend tortor quis pulvinar. Duis condimentum viverra leo, non varius leo dapibus suscipit. Pellentesque porttitor pharetra nisl, sit amet consectetur leo gravida sed. Sed tristique vestibulum enim, non iaculis diam vehicula id.
                    Nunc egestas dolor ut ligula tempus, et pharetra dolor laoreet. Nulla posuere hendrerit tincidunt. Nam lacinia felis ultricies tempus bibendum. Vestibulum pulvinar porta condimentum. Suspendisse hendrerit enim sem, in rutrum leo ornare quis. Curabitur sollicitudin tellus eros, ut auctor nisi laoreet ac. Praesent commodo porttitor urna et condimentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-0 rounded-5">
              <h2 className="accordion-header bg-white border border-0">
                <button
                  className="accordion-button bg-white py-4 shadow-none border border-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span className="fs-4">
                    Why auctor eget dolor sit amet convallis? Nunc sapien ipsum, facilisis at orci sit amet, sagittis lacinia tellus. Sed dictum turpis magna, interdum mattis lacus.
                  </span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fw-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    Fusce ornare porttitor ipsum vitae molestie. Donec sed finibus quam, eget varius eros. Cras ac congue leo, ut auctor nibh. Morbi imperdiet ullamcorper erat, eu fermentum nulla iaculis nec. Donec hendrerit eleifend tortor quis pulvinar. Duis condimentum viverra leo, non varius leo dapibus suscipit. Pellentesque porttitor pharetra nisl, sit amet consectetur leo gravida sed. Sed tristique vestibulum enim, non iaculis diam vehicula id.
                    Nunc egestas dolor ut ligula tempus, et pharetra dolor laoreet. Nulla posuere hendrerit tincidunt. Nam lacinia felis ultricies tempus bibendum. Vestibulum pulvinar porta condimentum. Suspendisse hendrerit enim sem, in rutrum leo ornare quis. Curabitur sollicitudin tellus eros, ut auctor nisi laoreet ac. Praesent commodo porttitor urna et condimentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-0 rounded-5">
              <h2 className="accordion-header bg-white border border-0">
                <button
                  className="accordion-button bg-white py-4 shadow-none border border-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span className="fs-4">What auctor eget dolor sit amet convallis?</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fw-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    Fusce ornare porttitor ipsum vitae molestie. Donec sed finibus quam, eget varius eros. Cras ac congue leo, ut auctor nibh. Morbi imperdiet ullamcorper erat, eu fermentum nulla iaculis nec. Donec hendrerit eleifend tortor quis pulvinar. Duis condimentum viverra leo, non varius leo dapibus suscipit. Pellentesque porttitor pharetra nisl, sit amet consectetur leo gravida sed. Sed tristique vestibulum enim, non iaculis diam vehicula id.
                    Nunc egestas dolor ut ligula tempus, et pharetra dolor laoreet. Nulla posuere hendrerit tincidunt. Nam lacinia felis ultricies tempus bibendum. Vestibulum pulvinar porta condimentum. Suspendisse hendrerit enim sem, in rutrum leo ornare quis. Curabitur sollicitudin tellus eros, ut auctor nisi laoreet ac. Praesent commodo porttitor urna et condimentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-0 rounded-5">
              <h2 className="accordion-header bg-white border border-0">
                <button
                  className="accordion-button bg-white py-4 shadow-none border border-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span className="fs-4">How it's sed dictum turpis magna, interdum mattis lacus?</span>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fw-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    Fusce ornare porttitor ipsum vitae molestie. Donec sed finibus quam, eget varius eros. Cras ac congue leo, ut auctor nibh. Morbi imperdiet ullamcorper erat, eu fermentum nulla iaculis nec. Donec hendrerit eleifend tortor quis pulvinar. Duis condimentum viverra leo, non varius leo dapibus suscipit. Pellentesque porttitor pharetra nisl, sit amet consectetur leo gravida sed. Sed tristique vestibulum enim, non iaculis diam vehicula id.
                    Nunc egestas dolor ut ligula tempus, et pharetra dolor laoreet. Nulla posuere hendrerit tincidunt. Nam lacinia felis ultricies tempus bibendum. Vestibulum pulvinar porta condimentum. Suspendisse hendrerit enim sem, in rutrum leo ornare quis. Curabitur sollicitudin tellus eros, ut auctor nisi laoreet ac. Praesent commodo porttitor urna et condimentum.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    
    </>
  )
}
