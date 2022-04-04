'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">curriculumVitae documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3a6ea99e5882228068babaf7ead3a1fd934104a15aed35777a97a4fe285355fe381a0deefb5de5acc289076d624feb74fc3d2173d3da395a055557f967715c21"' : 'data-target="#xs-components-links-module-AppModule-3a6ea99e5882228068babaf7ead3a1fd934104a15aed35777a97a4fe285355fe381a0deefb5de5acc289076d624feb74fc3d2173d3da395a055557f967715c21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3a6ea99e5882228068babaf7ead3a1fd934104a15aed35777a97a4fe285355fe381a0deefb5de5acc289076d624feb74fc3d2173d3da395a055557f967715c21"' :
                                            'id="xs-components-links-module-AppModule-3a6ea99e5882228068babaf7ead3a1fd934104a15aed35777a97a4fe285355fe381a0deefb5de5acc289076d624feb74fc3d2173d3da395a055557f967715c21"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CompetencesPageModule.html" data-type="entity-link" >CompetencesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompetencesPageModule-f1b427aa33a20a29b8d3a6f733e7654b220497a1b7c70235cce1606140d51abd6308a1ded17e6cdcf0e1c5c9d5ac1a83b532ae23f0d706dee8eac119b1f4db8a"' : 'data-target="#xs-components-links-module-CompetencesPageModule-f1b427aa33a20a29b8d3a6f733e7654b220497a1b7c70235cce1606140d51abd6308a1ded17e6cdcf0e1c5c9d5ac1a83b532ae23f0d706dee8eac119b1f4db8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompetencesPageModule-f1b427aa33a20a29b8d3a6f733e7654b220497a1b7c70235cce1606140d51abd6308a1ded17e6cdcf0e1c5c9d5ac1a83b532ae23f0d706dee8eac119b1f4db8a"' :
                                            'id="xs-components-links-module-CompetencesPageModule-f1b427aa33a20a29b8d3a6f733e7654b220497a1b7c70235cce1606140d51abd6308a1ded17e6cdcf0e1c5c9d5ac1a83b532ae23f0d706dee8eac119b1f4db8a"' }>
                                            <li class="link">
                                                <a href="components/CompetencesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompetencesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompetencesPageRoutingModule.html" data-type="entity-link" >CompetencesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExperiencesAddFormulairePageModule.html" data-type="entity-link" >ExperiencesAddFormulairePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExperiencesAddFormulairePageModule-b0df1acd125611227a9d2bac3c548d52f4d5627cf5aa69906a10da5fc1c784c40065e0052ac545d0faddb48e58a6c8205b59801c6299a2806915801ed952276e"' : 'data-target="#xs-components-links-module-ExperiencesAddFormulairePageModule-b0df1acd125611227a9d2bac3c548d52f4d5627cf5aa69906a10da5fc1c784c40065e0052ac545d0faddb48e58a6c8205b59801c6299a2806915801ed952276e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExperiencesAddFormulairePageModule-b0df1acd125611227a9d2bac3c548d52f4d5627cf5aa69906a10da5fc1c784c40065e0052ac545d0faddb48e58a6c8205b59801c6299a2806915801ed952276e"' :
                                            'id="xs-components-links-module-ExperiencesAddFormulairePageModule-b0df1acd125611227a9d2bac3c548d52f4d5627cf5aa69906a10da5fc1c784c40065e0052ac545d0faddb48e58a6c8205b59801c6299a2806915801ed952276e"' }>
                                            <li class="link">
                                                <a href="components/ExperiencesAddFormulairePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExperiencesAddFormulairePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperiencesAddFormulairePageRoutingModule.html" data-type="entity-link" >ExperiencesAddFormulairePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExperiencesOthersPageModule.html" data-type="entity-link" >ExperiencesOthersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExperiencesOthersPageModule-30c4675a8126c2541eb407f7112018f9a4459ad93f53f97361c267969583a5f848d8c2499d349c02f9b4a052d27cc4e915309e6eddcc9def45decc9aa7e811dd"' : 'data-target="#xs-components-links-module-ExperiencesOthersPageModule-30c4675a8126c2541eb407f7112018f9a4459ad93f53f97361c267969583a5f848d8c2499d349c02f9b4a052d27cc4e915309e6eddcc9def45decc9aa7e811dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExperiencesOthersPageModule-30c4675a8126c2541eb407f7112018f9a4459ad93f53f97361c267969583a5f848d8c2499d349c02f9b4a052d27cc4e915309e6eddcc9def45decc9aa7e811dd"' :
                                            'id="xs-components-links-module-ExperiencesOthersPageModule-30c4675a8126c2541eb407f7112018f9a4459ad93f53f97361c267969583a5f848d8c2499d349c02f9b4a052d27cc4e915309e6eddcc9def45decc9aa7e811dd"' }>
                                            <li class="link">
                                                <a href="components/ExperiencesOthersPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExperiencesOthersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperiencesOthersPageRoutingModule.html" data-type="entity-link" >ExperiencesOthersPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExperiencesPageModule.html" data-type="entity-link" >ExperiencesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExperiencesPageModule-943a058213699a83c680e13272bc7dd6bb6ea57e8c445da380ecc72af52353cd75b020dade85671296cd79b69711c901d02eedf779ee2db01a7be99494251553"' : 'data-target="#xs-components-links-module-ExperiencesPageModule-943a058213699a83c680e13272bc7dd6bb6ea57e8c445da380ecc72af52353cd75b020dade85671296cd79b69711c901d02eedf779ee2db01a7be99494251553"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExperiencesPageModule-943a058213699a83c680e13272bc7dd6bb6ea57e8c445da380ecc72af52353cd75b020dade85671296cd79b69711c901d02eedf779ee2db01a7be99494251553"' :
                                            'id="xs-components-links-module-ExperiencesPageModule-943a058213699a83c680e13272bc7dd6bb6ea57e8c445da380ecc72af52353cd75b020dade85671296cd79b69711c901d02eedf779ee2db01a7be99494251553"' }>
                                            <li class="link">
                                                <a href="components/ExperiencesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExperiencesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperiencesPageRoutingModule.html" data-type="entity-link" >ExperiencesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormationsPageModule.html" data-type="entity-link" >FormationsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormationsPageModule-7b29a8a7455e8713e89da4c3da91a94f48a0f0b7037ca6447eb46a4c393bf12ae68339d8a362c125e3b7e1386744af49d43f3150a6b9bbdbe3ea22ea149207f4"' : 'data-target="#xs-components-links-module-FormationsPageModule-7b29a8a7455e8713e89da4c3da91a94f48a0f0b7037ca6447eb46a4c393bf12ae68339d8a362c125e3b7e1386744af49d43f3150a6b9bbdbe3ea22ea149207f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormationsPageModule-7b29a8a7455e8713e89da4c3da91a94f48a0f0b7037ca6447eb46a4c393bf12ae68339d8a362c125e3b7e1386744af49d43f3150a6b9bbdbe3ea22ea149207f4"' :
                                            'id="xs-components-links-module-FormationsPageModule-7b29a8a7455e8713e89da4c3da91a94f48a0f0b7037ca6447eb46a4c393bf12ae68339d8a362c125e3b7e1386744af49d43f3150a6b9bbdbe3ea22ea149207f4"' }>
                                            <li class="link">
                                                <a href="components/FormationsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormationsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormationsPageRoutingModule.html" data-type="entity-link" >FormationsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-6ad1986edf21b154c21d07cd2b53a6c23b5c9dedb7835f49fcab821acd39165c939c111fa206ac4d29830fdcb0726639ebabe2a4c7b9307e778ba29e9cc2ddb4"' : 'data-target="#xs-components-links-module-HomePageModule-6ad1986edf21b154c21d07cd2b53a6c23b5c9dedb7835f49fcab821acd39165c939c111fa206ac4d29830fdcb0726639ebabe2a4c7b9307e778ba29e9cc2ddb4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-6ad1986edf21b154c21d07cd2b53a6c23b5c9dedb7835f49fcab821acd39165c939c111fa206ac4d29830fdcb0726639ebabe2a4c7b9307e778ba29e9cc2ddb4"' :
                                            'id="xs-components-links-module-HomePageModule-6ad1986edf21b154c21d07cd2b53a6c23b5c9dedb7835f49fcab821acd39165c939c111fa206ac4d29830fdcb0726639ebabe2a4c7b9307e778ba29e9cc2ddb4"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});