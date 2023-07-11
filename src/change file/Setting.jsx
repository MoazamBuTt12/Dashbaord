import React from 'react'
import "./Dashboard.css"

import photo1 from "./media/photos/photo1.jpg"
import photo2 from "./media/photos/photo2.jpg"
import photo6 from "./media/photos/photo6.jpg"
import photo21 from "./media/photos/photo21.jpg"
import photo22 from "./media/photos/photo22.jpg"
import photo9 from "./media/photos/photo9.jpg"
import photo23 from "./media/photos/photo23.jpg"
import photo24 from "./media/photos/photo24.jpg"
import photo25 from "./media/photos/photo25.jpg"
import avatar12 from "./media/avatars/avatar12.jpg"
import avatar14 from "./media/avatars/avatar14.jpg"
import avatar9 from "./media/avatars/avatar9.jpg"
import avatar16 from "./media/avatars/avatar16.jpg"
import avatar11 from "./media/avatars/avatar11.jpg"
import avatar3 from "./media/avatars/avatar3.jpg"
import avatar7 from "./media/avatars/avatar7.jpg"
import avatar10 from "./media/avatars/avatar10.jpg"
import avatar8 from "./media/avatars/avatar8.jpg"

import {Link} from "react-router-dom";

const Setting = () => {
  return (
    <div>

<div id="page-container" class="sidebar-dark side-scroll page-header-fixed page-header-dark main-content-boxed">

<nav id="sidebar">
  <div class="sidebar-content">
    <div class="content-header justify-content-lg-center bg-black-10">
      <div>
        <span class="smini-visible fw-bold tracking-wide fs-lg">
          c<span class="text-primary">b</span>
        </span>
        <a class="link-fx fw-bold tracking-wide mx-auto" href="index.html">
          <span class="smini-hidden">
            <i class="fa fa-fire text-primary"></i>
            <span class="fs-4 text-dual">code</span><span class="fs-4 text-primary">base</span>
          </span>
        </a>
      </div>

      <div>
       
        <button type="button" class="btn btn-sm btn-alt-danger d-lg-none" data-toggle="layout" data-action="sidebar_close">
          <i class="fa fa-fw fa-times"></i>
        </button>
      </div>
    </div>

    <div class="js-sidebar-scroll">
      <div class="content-side content-side-full">
      
        <ul class="nav-main">
          <li class="nav-main-item">
            <a class="nav-main-link" href="bd_dashboard.html">
              <i class="nav-main-link-icon fa fa-house-user"></i>
              <span class="nav-main-link-name">Dashboard</span>
            </a>
          </li>
          <li class="nav-main-heading">Layout</li>
          <li class="nav-main-item">
            <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
              <i class="nav-main-link-icon fa fa-puzzle-piece"></i>
              <span class="nav-main-link-name">Variations</span>
            </a>
            <ul class="nav-main-submenu">
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_simple_1.html">
                  <span class="nav-main-link-name">Hero Simple 1</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_simple_2.html">
                  <span class="nav-main-link-name">Hero Simple 2</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_simple_3.html">
                  <span class="nav-main-link-name">Hero Simple 3</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_simple_4.html">
                  <span class="nav-main-link-name">Hero Simple 4</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_image_1.html">
                  <span class="nav-main-link-name">Hero Image 1</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_image_2.html">
                  <span class="nav-main-link-name">Hero Image 2</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_image_3.html">
                  <span class="nav-main-link-name">Hero Image 3</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_image_4.html">
                  <span class="nav-main-link-name">Hero Image 4</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_video_1.html">
                  <span class="nav-main-link-name">Hero Video 1</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link" href="bd_variations_hero_video_2.html">
                  <span class="nav-main-link-name">Hero Video 2</span>
                </a>
              </li>
              <li class="nav-main-item">
                <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                  <span class="nav-main-link-name">More Options</span>
                </a>
                <ul class="nav-main-submenu">
                  <li class="nav-main-item">
                    <a class="nav-main-link" href="javascript:void(0)">
                      <span class="nav-main-link-name">Another Link</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link" href="javascript:void(0)">
                      <span class="nav-main-link-name">Another Link</span>
                    </a>
                  </li>
                  <li class="nav-main-item">
                    <a class="nav-main-link" href="javascript:void(0)">
                      <span class="nav-main-link-name">Another Link</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-main-heading">Other Pages</li>
          <li class="nav-main-item">
            <a class="nav-main-link active" href="bd_search.html">
              <i class="nav-main-link-icon fa fa-search"></i>
              <span class="nav-main-link-name">Search</span>
            </a>
          </li>
          <li class="nav-main-item">
            <a class="nav-main-link" href="be_pages_dashboard.html">
              <i class="nav-main-link-icon fa fa-arrow-left"></i>
              <span class="nav-main-link-name">Go Back</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<header id="page-header">
  <div class="content-header">
    <div class="space-x-1">
    <Link to="/Index"> <a class="link-fx fw-bold" href="index.html">
        <i class="fa fa-fire text-primary"></i>
        <span class="fs-4 text-dual">code</span><span class="fs-4 text-primary">base</span>
      </a></Link>
    </div>

    <div class="d-none d-lg-block">
   
      <ul class="nav-main nav-main-horizontal nav-main-hover">
        <Link to="/Dashboard"><li class="nav-main-item">
          <a class="nav-main-link" href="bd_dashboard.html">
            <i class="nav-main-link-icon fa fa-house-user"></i>
            <span class="nav-main-link-name">Dashboard</span>
          </a>
        </li></Link>
        <li class="nav-main-heading">Layout</li>
        <li class="nav-main-item">
          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
            <i class="nav-main-link-icon fa fa-puzzle-piece"></i>
            <span class="nav-main-link-name">Variations</span>
          </a>
          <ul class="nav-main-submenu">
          <Link to="/Variation1simple"> <li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_simple_1.html">
                <span class="nav-main-link-name">Hero Simple 1</span>
              </a>
            </li></Link>
            <Link to="/Variation2simple"><li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_simple_2.html">
                <span class="nav-main-link-name">Hero Simple 2</span>
              </a>
            </li></Link>
            <Link to="/Variation3simple"><li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_simple_3.html">
                <span class="nav-main-link-name">Hero Simple 3</span>
              </a>
            </li></Link>
            <Link to="/Variation4simple"><li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_simple_4.html">
                <span class="nav-main-link-name">Hero Simple 4</span>
              </a>
            </li></Link>
            <Link to="/Variation1image"><li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_image_1.html">
                <span class="nav-main-link-name">Hero Image 1</span>
              </a>
            </li></Link>
            <Link to="/Variation2image"><li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_image_2.html">
                <span class="nav-main-link-name">Hero Image 2</span>
              </a>
            </li></Link>
            <Link to="/Variation3image"> <li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_image_3.html">
                <span class="nav-main-link-name">Hero Image 3</span>
              </a>
            </li></Link>
            <Link to="/Variation4image"><li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_image_4.html">
                <span class="nav-main-link-name">Hero Image 4</span>
              </a>
            </li></Link>
            <Link to="/Variation1video"> <li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_video_1.html">
                <span class="nav-main-link-name">Hero Video 1</span>
              </a>
            </li></Link>
            <Link to="/Variation2video"> <li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_video_2.html">
                <span class="nav-main-link-name">Hero Video 2</span>
              </a>
            </li></Link>
            <li class="nav-main-item">
              <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                <span class="nav-main-link-name">More Options</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="javascript:void(0)">
                    <span class="nav-main-link-name">Another Link</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="javascript:void(0)">
                    <span class="nav-main-link-name">Another Link</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="javascript:void(0)">
                    <span class="nav-main-link-name">Another Link</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-main-heading">Other Pages</li>
        <li class="nav-main-item">
          <a class="nav-main-link" href="bd_search.html">
            <i class="nav-main-link-icon fa fa-search"></i>
           <span class="nav-main-link-name">Search</span>
          </a>
        </li>
        <Link to="/Goback_page_dashboard"><li class="nav-main-item">
          <a class="nav-main-link" href="be_pages_dashboard.html">
            <i class="nav-main-link-icon fa fa-arrow-left"></i>
            <span class="nav-main-link-name">Go Back</span>
          </a>
        </li></Link>
      </ul>
    </div>

    <div class="space-x-1">
     
      <div class="dropdown d-inline-block" role="group">
        <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-themes-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-fw fa-paint-brush"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0" aria-labelledby="page-header-themes-dropdown">
          <div class="p-3 bg-body-light rounded-top">
            <h5 class="h6 text-center mb-0">
              Color Themes
            </h5>
          </div>
          <div class="p-3">
            <div class="row g-0 text-center mb-1">
              <div class="col-2 mb-1">
                <a class="text-default" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                  <i class="fa fa-2x fa-circle"></i>
                </a>
              </div>
              <div class="col-2 mb-1">
                <a class="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min.css" href="javascript:void(0)">
                  <i class="fa fa-2x fa-circle"></i>
                </a>
              </div>
              <div class="col-2 mb-1">
                <a class="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min.css" href="javascript:void(0)">
                  <i class="fa fa-2x fa-circle"></i>
                </a>
              </div>
              <div class="col-2 mb-1">
                <a class="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="javascript:void(0)">
                  <i class="fa fa-2x fa-circle"></i>
                </a>
              </div>
              <div class="col-2 mb-1">
                <a class="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min.css" href="javascript:void(0)">
                  <i class="fa fa-2x fa-circle"></i>
                </a>
              </div>
              <div class="col-2 mb-1">
                <a class="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min.css" href="javascript:void(0)">
                  <i class="fa fa-2x fa-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <button type="button" class="btn btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="header_search_on">
        <i class="fa fa-fw fa-search"></i>
      </button>
     
      <button type="button" class="btn btn-sm btn-alt-secondary d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
        <i class="fa fa-fw fa-bars"></i>
      </button>
    </div>
  </div>

  <div id="page-header-search" class="overlay-header bg-body-extra-light">
    <div class="content-header">
      <form class="w-100" action="bd_search.html" method="POST">
        <div class="input-group">
         
          <button type="button" class="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
            <i class="fa fa-fw fa-times"></i>
          </button>
          <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input"></input>
          <button type="submit" class="btn btn-secondary">
            <i class="fa fa-fw fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>

  <div id="page-header-loader" class="overlay-header bg-primary">
    <div class="content-header">
      <div class="w-100 text-center">
        <i class="far fa-sun fa-spin text-white"></i>
      </div>
    </div>
  </div>
</header>

<main id="main-container">
  <div class="content">
    <form class="push" action="bd_search.html" method="POST">
      <div class="input-group input-group-lg">
        <input type="text" class="form-control" placeholder="Search web app.."></input>
        <button type="submit" class="btn btn-primary">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </form>

    <div class="block block-rounded overflow-hidden">
      <ul class="nav nav-tabs nav-tabs-block" role="tablist">
        <li class="nav-item">
          <button type="button" class="nav-link active" id="search-classic-tab" data-bs-toggle="tab" data-bs-target="#search-classic" role="tab" aria-controls="search-classic" aria-selected="true">
            Classic
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" id="search-photos-tab" data-bs-toggle="tab" data-bs-target="#search-photos" role="tab" aria-controls="search-photos" aria-selected="false">
            Photos
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" id="search-users-tab" data-bs-toggle="tab" data-bs-target="#search-users" role="tab" aria-controls="search-users" aria-selected="false">
            Users
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="nav-link" id="search-projects-tab" data-bs-toggle="tab" data-bs-target="#search-projects" role="tab" aria-controls="search-projects" aria-selected="false">
            Projects
          </button>
        </li>
      </ul>
      <div class="block-content block-content-full tab-content overflow-hidden">
        <div class="tab-pane fade show active" id="search-classic" role="tabpanel" aria-labelledby="search-classic-tab">
          <div class="fs-3 fw-semibold py-4 mb-3 text-center border-bottom">
            <span class="text-primary fw-bold">10</span> sites found for <mark class="text-danger">codebase</mark>
          </div>
          <div class="row items-push">
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
            <div class="col-lg-6">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">Codebase - Bootstrap 5 UI Framework</a>
              </h4>
              <div class="fs-sm text-earth mb-1">https://pixelcave.com/</div>
              <p class="fs-sm text-muted">Tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti himenaeos habitant quis in sit varius lorem quis dictumst proin odio sagittis..</p>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="search-photos" role="tabpanel" aria-labelledby="search-photos-tab">
          <div class="fs-3 fw-semibold py-4 mb-3 text-center border-bottom">
            <span class="text-primary fw-bold">9</span> images found for <mark class="text-danger">mountain</mark>
          </div>
          <div class="row g-sm">
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo1} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo2} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo6} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo21} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo22} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo9} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo23} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo24} alt=""></img>
            </div>
            <div class="col-md-6 col-lg-4 push">
              <img class="img-fluid" src={photo25} alt=""></img>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="search-users" role="tabpanel" aria-labelledby="search-users-tab">
          <div class="fs-3 fw-semibold py-4 mb-3 text-center border-bottom">
            <span class="text-primary fw-bold">10</span> users found for <mark class="text-danger">client</mark>
          </div>
          <table class="table table-striped table-borderless table-hover table-vcenter">
            <thead class="thead-light">
              <tr>
                <th class="d-none d-sm-table-cell text-center" style={{ width: '40px' }}
>#</th>
                <th class="text-center" style={{width: '70px'}}><i class="si si-user"></i></th>
                <th>Name</th>
                <th class="d-none d-sm-table-cell">Email</th>
                <th class="d-none d-lg-table-cell" style={{width: '15%'}}>Access</th>
                <th class="text-center" style={{width: '80px'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">1</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar12} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Wayne Garcia</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client1@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-info">Business</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">2</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar16} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Jose Wagner</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client2@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-primary">Personal</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">3</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar9} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Albert Ray</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client3@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-warning">Trial</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">4</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar14} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Jesse Fisher</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client4@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-info">Business</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">5</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar11} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Brian Stevens</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client5@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-primary">Personal</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">6</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar3} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Susan Day</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client6@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-primary">Personal</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">7</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar7} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Marie Duncan</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client7@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-warning">Trial</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">8</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar10} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Justin Hunt</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client8@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-primary">Personal</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">9</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar8} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Lisa Jenkins</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client9@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-success">VIP</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="d-none d-sm-table-cell text-center fw-bold">10</td>
                <td class="text-center">
                  <img class="img-avatar img-avatar48" src={avatar11} alt=""></img>
                </td>
                <td class="fw-semibold">
                  <a href="javascript:void(0)">Henry Harrison</a>
                </td>
                <td class="d-none d-sm-table-cell">
                  client10@example.com
                </td>
                <td class="d-none d-lg-table-cell">
                  <span class="badge bg-warning">Trial</span>
                </td>
                <td class="text-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Edit">
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="tooltip" title="Delete">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div class="tab-pane fade" id="search-projects" role="tabpanel" aria-labelledby="search-projects-tab">
          <div class="fs-3 fw-semibold py-4 mb-3 text-center border-bottom">
            <span class="text-primary fw-bold">6</span> projects found for <mark class="text-danger">creativity</mark>
          </div>
          <table class="table table-striped table-borderless table-hover table-vcenter">
            <thead class="thead-light">
              <tr>
                <th style= {{width: '50%'}}>Project</th>
                <th class="d-none d-lg-table-cell text-center" style={{width: '15%'}}>Status</th>
                <th class="d-none d-lg-table-cell text-center" style={{width: '15%'}}>Sales</th>
                <th class="text-center" style={{width: '20%'}}>Earnings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4 class="h5 mt-3 mb-1">
                    <a href="javascript:void(0)">Web Application Framework</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Your web applications have never been so easy to create and publish.
                  </p>
                </td>
                <td class="d-none d-lg-table-cell text-center">
                  <span class="badge bg-success">Completed</span>
                </td>
                <td class="d-none d-lg-table-cell fs-4 text-center fw-semibold">1795</td>
                <td class="fs-4 text-center fw-semibold">$ 21,987</td>
              </tr>
              <tr>
                <td>
                  <h4 class="h5 mt-3 mb-1">
                    <a href="javascript:void(0)">WP Theme</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Create a fully functional website with just a few clicks.
                  </p>
                </td>
                <td class="d-none d-lg-table-cell text-center">
                  <span class="badge bg-warning">In Progress</span>
                </td>
                <td class="d-none d-lg-table-cell fs-4 text-center fw-semibold">1680</td>
                <td class="fs-4 text-center fw-semibold">$ 11,350</td>
              </tr>
              <tr>
                <td>
                  <h4 class="h5 mt-3 mb-1">
                    <a href="javascript:void(0)">Dashboard Template</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Explore new designs with this new and fresh dashboard admin template.
                  </p>
                </td>
                <td class="d-none d-lg-table-cell text-center">
                  <span class="badge bg-success">Completed</span>
                </td>
                <td class="d-none d-lg-table-cell fs-4 text-center fw-semibold">3500</td>
                <td class="fs-4 text-center fw-semibold">$ 16,218</td>
              </tr>
              <tr>
                <td>
                  <h4 class="h5 mt-3 mb-1">
                    <a href="javascript:void(0)">Flaticon Set</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    A beatifully and and crafted icon set including more than 3000 icons.
                  </p>
                </td>
                <td class="d-none d-lg-table-cell text-center">
                  <span class="badge bg-success">Completed</span>
                </td>
                <td class="d-none d-lg-table-cell fs-4 text-center fw-semibold">2500</td>
                <td class="fs-4 text-center fw-semibold">$ 18,800</td>
              </tr>
              <tr>
                <td>
                  <h4 class="h5 mt-3 mb-1">
                    <a href="javascript:void(0)">iOS UI Kit</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Create your app wireframes easily with this new UI Kit featuring iOS based designs.
                  </p>
                </td>
                <td class="d-none d-lg-table-cell text-center">
                  <span class="badge bg-danger">Cancelled</span>
                </td>
                <td class="d-none d-lg-table-cell fs-4 text-center fw-semibold">2690</td>
                <td class="fs-4 text-center fw-semibold">$ 10,002</td>
              </tr>
              <tr>
                <td>
                  <h4 class="h5 mt-3 mb-1">
                    <a href="javascript:void(0)">Mobile App Framework</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Create your iOS and Android applications with this powerful and modern framework.
                  </p>
                </td>
                <td class="d-none d-lg-table-cell text-center">
                  <span class="badge bg-success">Completed</span>
                </td>
                <td class="d-none d-lg-table-cell fs-4 text-center fw-semibold">1980</td>
                <td class="fs-4 text-center fw-semibold">$ 25,985</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>

<footer id="page-footer">
  <div class="content py-3">
    <div class="row fs-sm">
      <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
        Crafted with <i class="fa fa-heart text-danger"></i> by <a class="fw-semibold" href="https://1.envato.market/ydb" target="_blank">pixelcave</a>
      </div>
      <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
        <a class="fw-semibold" href="https://1.envato.market/95j" target="_blank">Codebase 5.1</a> &copy; <span data-toggle="year-copy"></span>
      </div>
    </div>
  </div>
</footer>
</div>
    </div>
  )
}

export default Setting