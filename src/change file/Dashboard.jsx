import React from 'react'
import "./Dashboard.css"

import {FaFireAlt} from "react-icons/fa"
import {BiSolidHomeCircle} from "react-icons/bi"
import {HiOutlineRefresh} from "react-icons/hi"
import {SlWrench} from "react-icons/sl"
import {SlBriefcase} from "react-icons/sl"
import {LuUsers} from "react-icons/lu"
import {BsEnvelopePaper} from "react-icons/bs"
import {SlUser} from "react-icons/sl"
import {SlBubbles} from "react-icons/sl"
import {SlMagnifier} from "react-icons/sl"
import {RiBarChart2Line} from "react-icons/ri"
import {FiSettings} from "react-icons/fi"

import tube from "./media/favicons/tube.png"
import tube2 from "./media/favicons/tube2.png"

import {Link} from "react-router-dom";
const Dashboard = () => {
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
            <a class="nav-main-link active" href="bd_dashboard.html">
              {/* <i class="nav-main-link-icon fa fa-house-user"></i> */}
              <BiSolidHomeCircle/>
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
        <li class="nav-main-item">
          <a class="nav-main-link active" href="bd_dashboard.html">
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
  <div class="content">
    <div class="row">
      <div class="col-6 col-xl-3">
        <a class="block block-rounded block-link-rotate text-end" href="javascript:void(0)">
          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
            <div class="d-none d-sm-block">
              <i class="fa fa-shopping-bag fa-2x opacity-25"></i>
            </div>
            <div class="text-end">
              <div class="fs-3 fw-semibold">1500</div>
              <div class="fs-sm fw-semibold text-uppercase text-muted">Sales</div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-6 col-xl-3">
        <a class="block block-rounded block-link-rotate text-end" href="javascript:void(0)">
          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
            <div class="d-none d-sm-block">
              <i class="fa fa-wallet fa-2x opacity-25"></i>
            </div>
            <div class="text-end">
              <div class="fs-3 fw-semibold">$780</div>
              <div class="fs-sm fw-semibold text-uppercase text-muted">Earnings</div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-6 col-xl-3">
        <a class="block block-rounded block-link-rotate text-end" href="javascript:void(0)">
          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
            <div class="d-none d-sm-block">
              <i class="fa fa-envelope-open fa-2x opacity-25"></i>
            </div>
            <div class="text-end">
              <div class="fs-3 fw-semibold">15</div>
              <div class="fs-sm fw-semibold text-uppercase text-muted">Messages</div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-6 col-xl-3">
        <a class="block block-rounded block-link-rotate text-end" href="javascript:void(0)">
          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
            <div class="d-none d-sm-block">
              <i class="fa fa-users fa-2x opacity-25"></i>
            </div>
            <div class="text-end">
              <div class="fs-3 fw-semibold">4252</div>
              <div class="fs-sm fw-semibold text-uppercase text-muted">Online</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="block block-rounded">
          <div class="block-header">
            <h3 class="block-title">
              Sales <small>This week</small>
            </h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                {/* <i class="si si-refresh"></i> */}
                {/* <i class="fa-light fa-arrows-rotate"></i> */}
                <HiOutlineRefresh/>
              </button>
              <button type="button" class="btn-block-option">
                {/* <i class="si si-wrench"></i> */}
                <SlWrench/>
              </button>
            </div>
          </div>
          <div class="block-content p-1 bg-body-light">
           <img src={tube} alt="" />
            {/* <canvas id="js-chartjs-dashboard-lines"></canvas> */}
          </div>
          <div class="block-content">
            <div class="row items-push">
              <div class="col-6 col-sm-4 text-center text-sm-start">
                <div class="fs-sm fw-semibold text-uppercase text-muted">This Month</div>
                <div class="fs-4 fw-semibold">720</div>
                <div class="fw-semibold text-success">
                  <i class="fa fa-caret-up"></i> +16%
                </div>
              </div>
              <div class="col-6 col-sm-4 text-center text-sm-start">
                <div class="fs-sm fw-semibold text-uppercase text-muted">This Week</div>
                <div class="fs-4 fw-semibold">160</div>
                <div class="fw-semibold text-danger">
                  <i class="fa fa-caret-down"></i> -3%
                </div>
              </div>
              <div class="col-12 col-sm-4 text-center text-sm-start">
                <div class="fs-sm fw-semibold text-uppercase text-muted">Average</div>
                <div class="fs-4 fw-semibold">24.3</div>
                <div class="fw-semibold text-success">
                  <i class="fa fa-caret-up"></i> +9%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="block block-rounded">
          <div class="block-header">
            <h3 class="block-title">
              Earnings <small>This week</small>
            </h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                {/* <i class="si si-refresh"></i> */}
                <HiOutlineRefresh/>
              </button>
              <button type="button" class="btn-block-option">
                {/* <i class="si si-wrench"></i> */}
                <SlWrench/>
              </button>
            </div>
          </div>
          <div class="block-content p-1 bg-body-light">
          <img src={tube2} alt="" />
            {/* <canvas id="js-chartjs-dashboard-lines2"></canvas> */}
          </div>
          <div class="block-content">
            <div class="row items-push">
              <div class="col-6 col-sm-4 text-center text-sm-start">
                <div class="fs-sm fw-semibold text-uppercase text-muted">This Month</div>
                <div class="fs-4 fw-semibold">$ 6,540</div>
                <div class="fw-semibold text-success">
                  <i class="fa fa-caret-up"></i> +4%
                </div>
              </div>
              <div class="col-6 col-sm-4 text-center text-sm-start">
                <div class="fs-sm fw-semibold text-uppercase text-muted">This Week</div>
                <div class="fs-4 fw-semibold">$ 1,525</div>
                <div class="fw-semibold text-danger">
                  <i class="fa fa-caret-down"></i> -7%
                </div>
              </div>
              <div class="col-12 col-sm-4 text-center text-sm-start">
                <div class="fs-sm fw-semibold text-uppercase text-muted">Balance</div>
                <div class="fs-4 fw-semibold">$ 9,352</div>
                <div class="fw-semibold text-success">
                  <i class="fa fa-caret-up"></i> +35%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="block block-rounded">
          <div class="block-content block-content-full">
            <div class="py-3 text-center">
              <div class="mb-3">
                <i class="fa fa-envelope-open fa-4x text-primary"></i>
              </div>
              <div class="fs-4 fw-semibold">9.25k Subscribers</div>
              <div class="text-muted">Your main list is growing!</div>
              <div class="pt-3">
                <a class="btn btn-alt-primary" href="javascript:void(0)">
                  <i class="fa fa-cog opacity-50 me-1"></i> Manage list
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="block block-rounded">
          <div class="block-content block-content-full">
            <div class="py-3 text-center">
              <div class="mb-3">
                <i class="fa fab fa-twitter fa-4x text-info"></i>
              </div>
              <div class="fs-4 fw-semibold">+36 followers</div>
              <div class="text-muted">You are doing great!</div>
              <div class="pt-3">
                <a class="btn btn-alt-info" href="javascript:void(0)">
                  <i class="fa fa-users opacity-50 me-1"></i> Check them out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="block block-rounded">
          <div class="block-content block-content-full">
            <div class="py-3 text-center">
              <div class="mb-3">
                <i class="fa fa-check fa-4x text-success"></i>
              </div>
              <div class="fs-4 fw-semibold">Business Plan</div>
              <div class="text-muted">This is your current active plan</div>
              <div class="pt-3">
                <a class="btn btn-alt-success" href="javascript:void(0)">
                  <i class="fa fa-arrow-up opacity-50 me-1"></i> Upgrade to VIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <a class="block block-rounded block-link-rotate overflow-hidden" href="javascript:void(0)">
          <div class="block-content block-content-full">
            {/* <i class="si si-briefcase fa-2x opacity-25"></i> */}
            <SlBriefcase class="si si-briefcase fa-2x opacity-25"/>
            <div class="row g-5 py-3">
              <div class="col-6 text-end border-end">
                <div>
                  <div class="fs-3 fw-semibold">16</div>
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Projects</div>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <div class="fs-3 fw-semibold">2</div>
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Active</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6">
        <a class="block block-rounded block-link-rotate overflow-hidden" href="javascript:void(0)">
          <div class="block-content block-content-full">
            <div class="text-end">
              {/* <i class="si si-users fa-2x opacity-25"></i> */}
              <LuUsers class="si si-users fa-2x opacity-25"/>
            </div>
            <div class="row g-5 py-3">
              <div class="col-6 text-end border-end">
                <div>
                  <div class="fs-3 fw-semibold text-info">63250</div>
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Accounts</div>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <div class="fs-3 fw-semibold text-success">97%</div>
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Active</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-4 col-xl-2">
        <a class="block block-rounded block-link-rotate text-center" href="be_pages_generic_inbox.html">
          <div class="block-content ribbon ribbon-bookmark ribbon-success ribbon-left">
            <div class="ribbon-box">15</div>
            <p class="my-3">
              {/* <i class="si si-envelope-letter fa-2x"></i> */}
              <BsEnvelopePaper class="si si-envelope-letter fa-2x"/>
            </p>
            <p class="fw-semibold">Inbox</p>
          </div>
        </a>
      </div>
      <div class="col-6 col-md-4 col-xl-2">
        <a class="block block-rounded block-link-rotate text-center" href="be_pages_generic_profile.html">
          <div class="block-content">
            <p class="my-3">
              {/* <i class="si si-user fa-2x"></i> */}
              <SlUser class="si si-user fa-2x"/>
            </p>
            <p class="fw-semibold">Profile</p>
          </div>
        </a>
      </div>
      <div class="col-6 col-md-4 col-xl-2">
        <a class="block block-rounded block-link-rotate text-center" href="be_pages_forum_categories.html">
          <div class="block-content ribbon ribbon-bookmark ribbon-primary ribbon-left">
            <div class="ribbon-box">3</div>
            <p class="my-3">
              {/* <i class="si si-bubbles fa-2x"></i> */}
              < SlBubbles class="si si-bubbles fa-2x"/>
            </p>
            <p class="fw-semibold">Forum</p>
          </div>
        </a>
      </div>
      <div class="col-6 col-md-4 col-xl-2">
        <a class="block block-rounded block-link-rotate text-center" href="be_pages_generic_search.html">
          <div class="block-content">
            <p class="my-3">
              {/* <i class="si si-magnifier fa-2x"></i> */}
              <SlMagnifier class="si si-magnifier fa-2x"/>
            </p>
            <p class="fw-semibold">Search</p>
          </div>
        </a>
      </div>
      <div class="col-6 col-md-4 col-xl-2">
        <a class="block block-rounded block-link-rotate text-center" href="be_comp_charts.html">
          <div class="block-content">
            <p class="my-3">
              {/* <i class="si si-bar-chart fa-2x"></i> */}
              <RiBarChart2Line class="si si-bar-chart fa-2x"/>
            </p>
            <p class="fw-semibold">Live Stats</p>
          </div>
        </a>
      </div>
      <div class="col-6 col-md-4 col-xl-2">
        <a class="block block-rounded block-link-rotate text-center" href="javascript:void(0)">
          <div class="block-content">
            <p class="my-3">
              {/* <i class="si si-settings fa-2x"></i> */}
              < FiSettings class="si si-settings fa-2x"/>
            </p>
            <p class="fw-semibold">Settings</p>
          </div>
        </a>
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

export default Dashboard