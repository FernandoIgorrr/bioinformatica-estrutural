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
                    <a href="index.html" data-type="index-link">bioinformatica-estrutural documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppFormModule.html" data-type="entity-link" >AppFormModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppIconsModule.html" data-type="entity-link" >AppIconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppMaterialModule.html" data-type="entity-link" >AppMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' : 'data-bs-target="#xs-components-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' :
                                            'id="xs-components-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrequencyMatrixCalculatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrequencyMatrixCalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrositeMotifPatternComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrositeMotifPatternComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' : 'data-bs-target="#xs-pipes-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' :
                                            'id="xs-pipes-links-module-AppModule-12fe18ab31113f13b29eb1fc37522d41be6a3d67cd6cc3ddf04e0423fd185489a99eded020309d43814164e255d1f3480a1ca7bfbc82baa4e9d5ba2e70c03f71"' }>
                                            <li class="link">
                                                <a href="pipes/BreakLinesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreakLinesPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' : 'data-bs-target="#xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' :
                                            'id="xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Aminoacid.html" data-type="entity-link" >Aminoacid</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/Protein.html" data-type="entity-link" >Protein</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FastaService.html" data-type="entity-link" >FastaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListProcessingService.html" data-type="entity-link" >ListProcessingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PROSITEProcessingService.html" data-type="entity-link" >PROSITEProcessingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AminoacidColorMap.html" data-type="entity-link" >AminoacidColorMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FastaEntry.html" data-type="entity-link" >FastaEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubstitutionScoreMatrix.html" data-type="entity-link" >SubstitutionScoreMatrix</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});