import { babyWatermelons, image1Post1, image2Post1, onlineFood, profilePhotoUserReview, vegetalsRice } from "../assets";

export const posts = [
    {
        title: 'You Eat Enough of This Crucial Food',
        author: 'merkulove',
        date: 'August 15, 2020',
        hour: '9:25 am',
        bannerPost: onlineFood,
        tag: 'post1',
        comments: [
            {
                profilePhoto: profilePhotoUserReview,
                body: 'Placerat orci nulla pellentesque dignissim enim sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mi quis hendrerit dolor magna. Morbi enim nunc faucibus a pellentesque',
                author: 'merkulove',
                date: 'February 22, 2021',
                hour: '12:28 pm',
                replies: [
                    {
                        profilePhoto: profilePhotoUserReview,
                        body: 'Placerat orci nulla pellentesque dignissim enim sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mi quis hendrerit dolor magna. Morbi enim nunc faucibus a pellentesque',
                        author: 'merkulove',
                        date: 'February 22, 2021',
                        hour: '12:29 pm',
                    }
                ]
            },
            {
                profilePhoto: profilePhotoUserReview,
                body: 'In massa tempor nec feugiat nisl pretium fusce id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat',
                author: 'merkulove',
                date: 'February 22, 2021',
                hour: '12:29 pm',
                replies: []
            }
        ],
        postImages: [
            image1Post1,
            image2Post1,
        ],
        sectionsPost: [
            {
                text: `<div class="col-12 d-flex justify-content-center">
                            <div class="col-10">
                                <h4 class='fst-italic text-dark-blue fw-sans lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla leo.</h4>
                            </div>
                        </div>`
            },
            {
                text: `<h5 class='fst-italic text-dark-blue fw-sans text-end'>John Doe</h5>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>Phasellus posuere nibh erat, nec vestibulum purus lacinia ut. Donec sit amet ex placerat, condimentum tellus a, molestie eros. Cras nec faucibus metus.</p>`,
            },
            {
                text: `<ul>
                    <li class='fw-sans text-dark-blue'>Donec at mi non arcu interdum venenatis.</li>
                    <li class='fw-sans text-dark-blue'>Pellentesque habitant morbi tristique senectus.</li>
                    <li class='fw-sans text-dark-blue'>Et netus et malesuada fames ac turpis egestas.</li>
                    <li class='fw-sans text-dark-blue'>Sed condimentum mauris scelerisque nibh porta luctus.</li>
                </ul>`
            },
            {
                text: `<p class='text-dark-blue fw-sans'>Nam sodales velit in est tincidunt dignissim. Pellentesque imperdiet leo ac mauris suscipit iaculis. Mauris auctor ipsum quis massa condimentum sagittis. Fusce ullamcorper, dui at rutrum lacinia, nisi lacus malesuada sapien, ut eleifend felis quam non purus. Donec in porta dolor.</p>`,
            },
            {
                text: `<h3 class='text-dark'>Elementor Templates</h3>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>Mauris eget nisi id odio dignissim hendrerit a in eros. Morbi sed posuere arcu, ac commodo magna. Vestibulum quis lectus non sem aliquet mattis interdum in velit. Nunc ac lectus non sapien pellentesque consequat. Sed scelerisque dignissim tortor et porta. Fusce suscipit ex eget varius posuere. Maecenas vitae metus quis elit maximus lacinia. Nam vitae enim sed diam aliquet iaculis sit amet id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis dictum ipsum.</p>`,
            },
            {
                text: `<div class="row">
                            <div class="col-lg-6 p-3">
                                <div class="col-12 h-100 border border-0 rounded-4 overflow-hidden">
                                    <img class='col-12 h-100 object-fit-cover' src="${image1Post1}" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 p-3">
                                <div class="col-12 h-100 border border-0 rounded-4 overflow-hidden">
                                    <img class='col-12 h-100 object-fit-cover' src="${image2Post1}" alt="" />
                                </div>
                            </div>
                        </div>`,
            },
            {
                text: `<p class='fst-italic text-dark fw-sans mb-1'>
                            Seasonal Vitamins
                        </p>
                        <p class='text-dark-blue fw-sans'>
                            Nunc ac erat nec orci vulputate cursus eget in urna. Morbi mi nisi, mattis lobortis nulla vitae, commodo convallis velit. Nam dui lectus, rutrum ultricies fringilla ac, viverra nec risus. Nulla iaculis dignissim turpis sit amet gravida.
                        </p>
                        
                
                `,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                           Ut gravida vitae purus ornare porta. Nunc vitae mollis lacus, ut tincidunt velit. Nam egestas sollicitudin viverra.
                        </p>`,
            },
            {
                text: `<h3 class='text-dark'>WordPress Theme</h3>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                           Maecenas sed pulvinar neque, vitae placerat lectus. Mauris sed orci justo. Nam sed euismod risus. Etiam semper, elit ac tristique viverra, mi mauris dapibus leo, ultricies rhoncus lectus nunc sit amet eros. Curabitur sagittis dui est, in molestie neque tempor ut. Vestibulum volutpat, nunc ac fermentum vehicula, libero lorem mattis nunc, nec imperdiet turpis urna sit amet odio. Aliquam scelerisque ex lacus, congue rhoncus orci placerat ac. Morbi vel elit ac lacus ullamcorper pretium. Mauris sed elit turpis. Cras ut nibh viverra, ullamcorper sem nec, ultrices lectus. Suspendisse mi libero, ultricies vel gravida eu, cursus non augue.
                        </p>`,
            },
            {
                text: `<div class="col-12 d-flex justify-content-center">
                            <div class="col-10">
                                <h4 class='fst-italic text-dark-blue fw-sans lh-lg'>Aliquam posuere at tellus et maximus. Cras at nunc ullamcorper, fringilla dui sit amet, scelerisque velit. Aenean eu volutpat lectus. Aenean laoreet mi id dignissim mattis.</h4>
                            </div>
                        </div>`
            },
            {
                text: `<h5 class='fst-italic text-dark-blue fw-sans text-end'>merkulove</h5>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                           Nunc nec malesuada nisi. Phasellus dapibus nulla sapien, id dignissim nisi viverra eu. Aliquam maximus nisl tincidunt dolor dictum pretium. Cras nulla risus, vulputate sed mi sit amet, cursus molestie massa.
                        </p>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                           Proin cursus pellentesque nisl, a laoreet justo tempor nec. Vestibulum non est orci. Praesent sed massa facilisis, faucibus quam ac, cursus lorem. Curabitur tempor sapien et justo aliquet faucibus. Morbi gravida felis justo, lacinia tincidunt mauris porta at. Mauris eget est orci. Maecenas lacinia augue ut ultricies dictum. Donec tincidunt pulvinar arcu, id aliquam orci euismod commodo. Aenean sed pharetra sapien, a varius libero. Phasellus porta dignissim pharetra. Etiam id facilisis est. Suspendisse ultrices eros vitae venenatis vehicula. Sed laoreet velit non vestibulum cursus. Nam vel sapien sit amet elit gravida auctor id a elit. Mauris a tempor turpis. In ultricies odio risus.
                        </p>`,
            },
        ],
    },


    {
        title: 'Apple’s Latest Power Move Steals Web Traffic From Publishers',
        author: 'merkulove',
        date: 'August 14, 2020',
        hour: '9:48 am',
        comments: [],
        tag: 'post2',
        bannerPost: babyWatermelons,
        postImages: [],
        sectionsPost: [
            {
                text: `<p class='text-dark-blue fw-sans'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla leo. Phasellus posuere nibh erat, nec vestibulum purus lacinia ut. Donec sit amet ex placerat, condimentum tellus a, molestie eros. Cras nec faucibus metus?
                        </p>`,
            },
            {
                text: `<ul>
                    <li class='fw-sans text-dark-blue'>Donec at mi non arcu interdum venenatis.</li>
                    <li class='fw-sans text-dark-blue'>Pellentesque habitant morbi tristique senectus.</li>
                    <li class='fw-sans text-dark-blue'>Et netus et malesuada fames ac turpis egestas.</li>
                    <li class='fw-sans text-dark-blue'>Sed condimentum mauris scelerisque nibh porta luctus.</li>
                </ul>`
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                           Nam sodales velit in est tincidunt dignissim. Pellentesque imperdiet leo ac mauris suscipit iaculis. Mauris auctor ipsum quis massa condimentum sagittis. Fusce ullamcorper, dui at rutrum lacinia, nisi lacus malesuada sapien, ut eleifend felis quam non purus. Donec in porta dolor.
                        </p>`,
            },
            {
                text: `<h3 class='text-dark'>WordPress Theme</h3>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Mauris eget nisi id odio dignissim hendrerit a in eros. Morbi sed posuere arcu, ac commodo magna. Vestibulum quis lectus non sem aliquet mattis interdum in velit. Nunc ac lectus non sapien pellentesque consequat. Sed scelerisque dignissim tortor et porta. Fusce suscipit ex eget varius posuere. Maecenas vitae metus quis elit maximus lacinia. Nam vitae enim sed diam aliquet iaculis sit amet id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis dictum ipsum. Nunc ac erat nec orci vulputate cursus eget in urna. Morbi mi nisi, mattis lobortis nulla vitae, commodo convallis velit. Nam dui lectus, rutrum ultricies fringilla ac, viverra nec risus. Nulla iaculis dignissim turpis sit amet gravida.
                        </p>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Ut gravida vitae purus ornare porta. Nunc vitae mollis lacus, ut tincidunt velit. Nam egestas sollicitudin viverra.
                        </p>`,
            },
            {
                text: `<h3 class='text-dark'>WordPress Theme</h3>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Maecenas sed pulvinar neque, vitae placerat lectus. Mauris sed orci justo. Nam sed euismod risus. Etiam semper, elit ac tristique viverra, mi mauris dapibus leo, ultricies rhoncus lectus nunc sit amet eros. Curabitur sagittis dui est, in molestie neque tempor ut. Vestibulum volutpat, nunc ac fermentum vehicula, libero lorem mattis nunc, nec imperdiet turpis urna sit amet odio. Aliquam scelerisque ex lacus, congue rhoncus orci placerat ac. Morbi vel elit ac lacus ullamcorper pretium. Mauris sed elit turpis. Cras ut nibh viverra, ullamcorper sem nec, ultrices lectus. Suspendisse mi libero, ultricies vel gravida eu, cursus non augue.
                        </p>`,
            },
            {
                text: `<div class="col-12 d-flex justify-content-center">
                            <div class="col-10">
                                <h4 class='fst-italic text-dark-blue fw-sans lh-lg'>Aliquam posuere at tellus et maximus. Cras at nunc ullamcorper, fringilla dui sit amet, scelerisque velit. Aenean eu volutpat lectus. Aenean laoreet mi id dignissim mattis.</h4>
                            </div>
                        </div>`
            },
            {
                text: `<h5 class='fst-italic text-dark-blue fw-sans text-end'>merkulove</h5>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Nunc nec malesuada nisi. Phasellus dapibus nulla sapien, id dignissim nisi viverra eu. Aliquam maximus nisl tincidunt dolor dictum pretium. Cras nulla risus, vulputate sed mi sit amet, cursus molestie massa.
                        </p>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Proin cursus pellentesque nisl, a laoreet justo tempor nec. Vestibulum non est orci. Praesent sed massa facilisis, faucibus quam ac, cursus lorem. Curabitur tempor sapien et justo aliquet faucibus. Morbi gravida felis justo, lacinia tincidunt mauris porta at. Mauris eget est orci. Maecenas lacinia augue ut ultricies dictum. Donec tincidunt pulvinar arcu, id aliquam orci euismod commodo. Aenean sed pharetra sapien, a varius libero. Phasellus porta dignissim pharetra. Etiam id facilisis est. Suspendisse ultrices eros vitae venenatis vehicula. Sed laoreet velit non vestibulum cursus. Nam vel sapien sit amet elit gravida auctor id a elit. Mauris a tempor turpis. In ultricies odio risus.
                        </p>`,
            },
        ],
    },

    {
        title: 'I’m Going To Tell You The Biggest Secret About Competing On MasterChef',
        author: 'merkulove',
        date: 'August 14, 2020',
        hour: '9:45 am',
        comments: [],
        tag: 'post3',
        bannerPost: vegetalsRice,
        postImages: [],
        sectionsPost: [
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla leo. Phasellus posuere nibh erat, nec vestibulum purus lacinia ut. Donec sit amet ex placerat, condimentum tellus a, molestie eros. Cras nec faucibus metus. Donec at mi non arcu interdum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed condimentum mauris scelerisque nibh porta luctus. Nam sodales velit in est tincidunt dignissim. Pellentesque imperdiet leo ac mauris suscipit iaculis. Mauris auctor ipsum quis massa condimentum sagittis. Fusce ullamcorper, dui at rutrum lacinia, nisi lacus malesuada sapien, ut eleifend felis quam non purus. Donec in porta dolor.
                        </p>`,
            },
            {
                text: `<div class="col-12 d-flex justify-content-center">
                            <div class="col-10">
                                <h4 class='fst-italic text-dark-blue fw-sans lh-lg'>Mauris eget nisi id odio dignissim hendrerit a in eros. Morbi sed posuere arcu, ac commodo magna. Vestibulum quis lectus non sem aliquet mattis interdum in velit.</h4>
                            </div>
                        </div>`
            },
            {
                text: `<h5 class='fst-italic text-dark-blue fw-sans text-end'>merkulove</h5>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Nunc ac lectus non sapien pellentesque consequat. Sed scelerisque dignissim tortor et porta. Fusce suscipit ex eget varius posuere. Maecenas vitae metus quis elit maximus lacinia. Nam vitae enim sed diam aliquet iaculis sit amet id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis dictum ipsum. Nunc ac erat nec orci vulputate cursus eget in urna. Morbi mi nisi, mattis lobortis nulla vitae, commodo convallis velit. Nam dui lectus, rutrum ultricies fringilla ac, viverra nec risus. Nulla iaculis dignissim turpis sit amet gravida.
                        </p>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            <!-- Link Begin Here !-->
                            <a href="https://merkulov.design/"></a>
                            <!-- Link End Here !-->
                        </p>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Nunc vitae mollis lacus, ut tincidunt velit. Nam egestas sollicitudin viverra. Maecenas sed pulvinar neque, vitae placerat lectus. Mauris sed orci justo. Nam sed euismod risus. Etiam semper, elit ac tristique viverra, mi mauris dapibus leo, ultricies rhoncus lectus nunc sit amet eros. Curabitur sagittis dui est, in molestie neque tempor ut. Vestibulum volutpat, nunc ac fermentum vehicula, libero lorem mattis nunc, nec imperdiet turpis urna sit amet odio. Aliquam scelerisque ex lacus, congue rhoncus orci placerat ac. Morbi vel elit ac lacus ullamcorper pretium. Mauris sed elit turpis. Cras ut nibh viverra, ullamcorper sem nec, ultrices lectus. Suspendisse mi libero, ultricies vel gravida eu, cursus non augue.
                        </p>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Aliquam posuere at tellus et maximus. Cras at nunc ullamcorper, fringilla dui sit amet, scelerisque velit. Aenean eu volutpat lectus. Aenean laoreet mi id dignissim mattis. Nunc nec malesuada nisi. Phasellus dapibus nulla sapien, id dignissim nisi viverra eu. Aliquam maximus nisl tincidunt dolor dictum pretium.
                        </p>`,
            },
            {
                text: `<div class="col-12 d-flex justify-content-center">
                            <div class="col-10">
                                <h4 class='fst-italic text-dark-blue fw-sans lh-lg'>Cras nulla risus, vulputate sed mi sit amet, cursus molestie massa.</h4>
                            </div>
                        </div>`
            },
            {
                text: `<h5 class='fst-italic text-dark-blue fw-sans text-end'>merkulove</h5>`,
            },
            {
                text: `<p class='text-dark-blue fw-sans'>
                            Proin cursus pellentesque nisl, a laoreet justo tempor nec. Vestibulum non est orci. Praesent sed massa facilisis, faucibus quam ac, cursus lorem. Curabitur tempor sapien et justo aliquet faucibus. Morbi gravida felis justo, lacinia tincidunt mauris porta at. Mauris eget est orci. Maecenas lacinia augue ut ultricies dictum. Donec tincidunt pulvinar arcu, id aliquam orci euismod commodo. Aenean sed pharetra sapien, a varius libero. Phasellus porta dignissim pharetra. Etiam id facilisis est. Suspendisse ultrices eros vitae venenatis vehicula. Sed laoreet velit non vestibulum cursus.
                        </p>`,
            },
            {
                text: `<small>
                        <p class='text-dark-blue fw-sans'>
                           Nam vel sapien sit amet elit gravida auctor id a elit. Mauris a tempor turpis. In ultricies odio risus.
                        </p>
                       </small>`,
            },
        ],
    }
]