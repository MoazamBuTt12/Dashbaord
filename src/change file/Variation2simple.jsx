import React from 'react'
import "./Dashboard.css"

import {Link} from "react-router-dom";

const Variation2simple = () => {
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
          <li class="nav-main-item open">
            <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="true" href="#">
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
                <a class="nav-main-link active" href="bd_variations_hero_simple_2.html">
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
            <a class="nav-main-link" href="bd_search.html">
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
          <a class="nav-main-link active nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="true" href="#">
            <i class="nav-main-link-icon fa fa-puzzle-piece"></i>
            <span class="nav-main-link-name">Variations</span>
          </a>
          <ul class="nav-main-submenu">
          <Link to="/Variation1simple"> <li class="nav-main-item">
              <a class="nav-main-link" href="bd_variations_hero_simple_1.html">
                <span class="nav-main-link-name">Hero Simple 1</span>
              </a>
            </li></Link>
            <li class="nav-main-item">
              <a class="nav-main-link active" href="bd_variations_hero_simple_2.html">
                <span class="nav-main-link-name">Hero Simple 2</span>
              </a>
            </li>
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
        <Link to="/Setting"><li class="nav-main-item">
          <a class="nav-main-link" href="bd_search.html">
            <i class="nav-main-link-icon fa fa-search"></i>
           <span class="nav-main-link-name">Search</span>
          </a>
        </li></Link>
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
  <div class="bg-body-extra-light">
    <div class="content text-center">
      <div class="pt-5 pb-3">
        <h1 class="h2 fw-bold mb-2">Dashboard</h1>
        <h2 class="h5 fw-medium text-muted">Today is an awesome day!</h2>
      </div>
    </div>
  </div>

  <div class="content content-full">
    <div class="row">
      <div class="col-sm-4">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="block block-rounded">
          <div class="block-content">
            <p class="text-center py-7">...</p>
          </div>
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

export default Variation2simple