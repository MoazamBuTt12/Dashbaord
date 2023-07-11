import React from 'react'
import "./Dashboard.css"

import image from "./media/avatars/avatar15.jpg"
import image2 from "./media/avatars/avatar1.jpg"
import image3 from "./media/avatars/avatar2.jpg"
import image4 from "./media/avatars/avatar3.jpg"

const Blockapi = () => {
  return (
    <div>

<div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">
      <aside id="side-overlay">
        <div class="content-header">
          <a class="img-link me-2" href="be_pages_generic_profile.html">
            <img class="img-avatar img-avatar32" src={image} alt=""></img>
          </a>
         
          <a class="link-fx text-body-color-dark fw-semibold fs-sm" href="be_pages_generic_profile.html">
            John Smith
          </a>
         
          <button type="button" class="btn btn-sm btn-alt-danger ms-auto" data-toggle="layout" data-action="side_overlay_close">
            <i class="fa fa-fw fa-times"></i>
          </button>
        </div>

        <div class="content-side">
          <div class="block pull-t pull-x">
            <div class="block-content block-content-full block-content-sm bg-body-light">
              <form action="be_pages_generic_search.html" method="POST">
                <div class="input-group">
                  <input type="text" class="form-control" id="side-overlay-search" name="side-overlay-search" placeholder="Search.."></input>
                  <button type="submit" class="btn btn-secondary">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="block pull-x">
            <div class="block-content block-content-full block-content-sm bg-body-light">
              <div class="row text-center">
                <div class="col-4">
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Clients</div>
                  <div class="fs-4">460</div>
                </div>
                <div class="col-4">
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Sales</div>
                  <div class="fs-4">728</div>
                </div>
                <div class="col-4">
                  <div class="fs-sm fw-semibold text-uppercase text-muted">Earnings</div>
                  <div class="fs-4">$7,860</div>
                </div>
              </div>
            </div>
          </div>

          <div class="block pull-x">
            <div class="block-header bg-body-light">
              <h3 class="block-title">
                <i class="fa fa-fw fa-users opacity-50 me-1"></i> Friends
              </h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                  <i class="si si-refresh"></i>
                </button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
              </div>
            </div>
            <div class="block-content">
              <ul class="nav-users">
                <li>
                  <a href="be_pages_generic_profile.html">
                    <img class="img-avatar" src={image4} alt=""></img>
                    <i class="fa fa-circle text-success"></i>
                    <div>Amber Harvey</div>
                    <div class="fw-normal fs-xs text-muted">Photographer</div>
                  </a>
                </li>
                <li>
                  <a href="be_pages_generic_profile.html">
                    <img class="img-avatar" src={image} alt=""></img>
                    <i class="fa fa-circle text-success"></i>
                    <div>Jeffrey Shaw</div>
                    <div class="fw-normal fs-xs text-muted">Web Designer</div>
                  </a>
                </li>
                <li>
                  <a href="be_pages_generic_profile.html">
                    <img class="img-avatar" src={image2} alt=""></img>
                    <i class="fa fa-circle text-warning"></i>
                    <div>Melissa Rice</div>
                    <div class="fw-normal fs-xs text-muted">UI Designer</div>
                  </a>
                </li>
                <li>
                  <a href="be_pages_generic_profile.html">
                    <img class="img-avatar" src={image3} alt=""></img>
                    <div>Albert Ray</div>
                    <div class="fw-normal fs-xs text-muted">Copywriter</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="block pull-x">
            <div class="block-header bg-body-light">
              <h3 class="block-title">
                <i class="far fa-fw fa-clock opacity-50 me-1"></i> Activity
              </h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                  <i class="si si-refresh"></i>
                </button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
              </div>
            </div>
            <div class="block-content">
              <ul class="list list-activity mb-0">
                <li>
                  <i class="si si-wallet text-success"></i>
                  <div class="fs-sm fw-semibold">+$29 New sale</div>
                  <div class="fs-sm">
                    <a href="javascript:void(0)">Admin Template</a>
                  </div>
                  <div class="fs-xs text-muted">5 min ago</div>
                </li>
                <li>
                  <i class="si si-close text-danger"></i>
                  <div class="fs-sm fw-semibold">Project removed</div>
                  <div class="fs-sm">
                    <a href="javascript:void(0)">Best Icon Set</a>
                  </div>
                  <div class="fs-xs text-muted">26 min ago</div>
                </li>
                <li>
                  <i class="si si-pencil text-info"></i>
                  <div class="fs-sm fw-semibold">You edited the file</div>
                  <div class="fs-sm">
                    <a href="javascript:void(0)">
                      <i class="fa fa-file-alt"></i> Docs.doc
                    </a>
                  </div>
                  <div class="fs-xs text-muted">3 hours ago</div>
                </li>
                <li>
                  <i class="si si-plus text-success"></i>
                  <div class="fs-sm fw-semibold">New user</div>
                  <div class="fs-sm">
                    <a href="javascript:void(0)">StudioWeb - View Profile</a>
                  </div>
                  <div class="fs-xs text-muted">5 hours ago</div>
                </li>
                <li>
                  <i class="si si-wrench text-warning"></i>
                  <div class="fs-sm fw-semibold">App v5.5 is available</div>
                  <div class="fs-sm">
                    <a href="javascript:void(0)">Update now</a>
                  </div>
                  <div class="fs-xs text-muted">8 hours ago</div>
                </li>
                <li>
                  <i class="si si-user-follow text-pulse"></i>
                  <div class="fs-sm fw-semibold">+1 Friend Request</div>
                  <div class="fs-sm">
                    <a href="javascript:void(0)">Accept</a>
                  </div>
                  <div class="fs-xs text-muted">1 day ago</div>
                </li>
              </ul>
            </div>
          </div>

          <div class="block pull-x">
            <div class="block-header bg-body-light">
              <h3 class="block-title">
                <i class="fa fa-fw fa-pencil-alt opacity-50 me-1"></i> Profile
              </h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
              </div>
            </div>
            <div class="block-content block-content-full">
              <form action="be_pages_dashboard.html" method="POST" onsubmit="return false;">
                <div class="mb-3">
                  <label class="form-label" for="side-overlay-profile-name">Name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="side-overlay-profile-name" name="side-overlay-profile-name" placeholder="Your name.." value="John Smith"></input>
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="side-overlay-profile-email">Email</label>
                  <div class="input-group">
                    <input type="email" class="form-control" id="side-overlay-profile-email" name="side-overlay-profile-email" placeholder="Your email.." value="john.smith@example.com"></input>
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="side-overlay-profile-password">New Password</label>
                  <div class="input-group">
                    <input type="password" class="form-control" id="side-overlay-profile-password" name="side-overlay-profile-password" placeholder="New Password.."></input>
                    <span class="input-group-text">
                      <i class="fa fa-asterisk"></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="side-overlay-profile-password-confirm">Confirm New Password</label>
                  <div class="input-group">
                    <input type="password" class="form-control" id="side-overlay-profile-password-confirm" name="side-overlay-profile-password-confirm" placeholder="Confirm New Password.."></input>
                    <span class="input-group-text">
                      <i class="fa fa-asterisk"></i>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <button type="submit" class="btn btn-alt-primary">
                      <i class="fa fa-sync opacity-50 me-1"></i> Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="block pull-x">
            <div class="block-header bg-body-light">
              <h3 class="block-title">
                <i class="fa fa-fw fa-wrench opacity-50 me-1"></i> Settings
              </h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
              </div>
            </div>
            <div class="block-content block-content-full">
              <div class="mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-status" name="side-overlay-settings-security-status" checked></input>
                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-status">Online Status</label>
                  <div class="fs-sm text-muted">Show your status to all</div>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-verify" name="side-overlay-settings-security-verify"></input>
                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-verify">Verify on Login</label>
                  <div class="fs-sm text-muted">Most secure option</div>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-updates" name="side-overlay-settings-security-updates" checked></input>
                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-updates">Auto Updates</label>
                  <div class="fs-sm text-muted">Keep app updated</div>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-notifications" name="side-overlay-settings-security-notifications" checked></input>
                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-notifications">Notifications</label>
                  <div class="fs-sm text-muted">For every transaction</div>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-api" name="side-overlay-settings-security-api" checked></input>
                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-api">API Access</label>
                  <div class="fs-sm text-muted">Enable access from third party apps</div>
                </div>
              </div>
              <div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-2fa" name="side-overlay-settings-security-2fa"></input>
                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-2fa">Two Factor Auth</label>
                  <div class="fs-sm text-muted">Using an authenticator</div>
                </div>
              </div>
            </div>
          </div>
]        </div>
\      </aside>

      
      <nav id="sidebar">
        <div class="sidebar-content">
          <div class="content-header justify-content-lg-center">
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
            <div class="content-side content-side-user px-0 py-0">
              <div class="smini-visible-block animated fadeIn px-3">
                <img class="img-avatar img-avatar32" src={image} alt=""></img>
              </div>
              
              <div class="smini-hidden text-center mx-auto">
                <a class="img-link" href="be_pages_generic_profile.html">
                  <img class="img-avatar" src={image} alt=""></img>
                </a>
                <ul class="list-inline mt-3 mb-0">
                  <li class="list-inline-item">
                    <a class="link-fx text-dual fs-sm fw-semibold text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                  </li>
                  <li class="list-inline-item">
                    <a class="link-fx text-dual" data-toggle="layout" data-action="dark_mode_toggle" href="javascript:void(0)">
                      <i class="fa fa-burn"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="link-fx text-dual" href="op_auth_signin.html">
                      <i class="fa fa-sign-out-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="content-side content-side-full">
              <ul class="nav-main">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_dashboard.html">
                    <i class="nav-main-link-icon fa fa-house-user"></i>
                    <span class="nav-main-link-name">Dashboard</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-award"></i>
                    <span class="nav-main-link-name">Page Kits</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Dashboards</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_dashboard2.html">
                            <span class="nav-main-link-name">Dashboard 2</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_dashboard3.html">
                            <span class="nav-main-link-name">Dashboard 3</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_dashboard4.html">
                            <span class="nav-main-link-name">Dashboard 4</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Alt Dashboards</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_classic.html">
                            <span class="nav-main-link-name">Classic</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_clean.html">
                            <span class="nav-main-link-name">Clean</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_social.html">
                            <span class="nav-main-link-name">Social</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_corporate.html">
                            <span class="nav-main-link-name">Corporate</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_minimal.html">
                            <span class="nav-main-link-name">Minimal</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_pop.html">
                            <span class="nav-main-link-name">Pop</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="db_medical.html">
                            <span class="nav-main-link-name">Medical</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Hosting</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_hosting_dashboard.html">
                            <span class="nav-main-link-name">Dashboard</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_hosting_emails.html">
                            <span class="nav-main-link-name">Emails</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_hosting_account.html">
                            <span class="nav-main-link-name">Account</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_hosting_support.html">
                            <span class="nav-main-link-name">Support</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Real Estate</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_real_estate_dashboard.html">
                            <span class="nav-main-link-name">Dashboard</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_real_estate_listing.html">
                            <span class="nav-main-link-name">Listing</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_real_estate_listing_new.html">
                            <span class="nav-main-link-name">Add New Listing</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Crypto</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_crypto_dashboard.html">
                            <span class="nav-main-link-name">Dashboard</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_crypto_buy_sell.html">
                            <span class="nav-main-link-name">Buy/Sell</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_crypto_wallets.html">
                            <span class="nav-main-link-name">Wallets</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_crypto_settings.html">
                            <span class="nav-main-link-name">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">e-Commerce</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_ecom_dashboard.html">
                            <span class="nav-main-link-name">Dashboard</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_ecom_orders.html">
                            <span class="nav-main-link-name">Orders</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_ecom_order.html">
                            <span class="nav-main-link-name">Order</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_ecom_products.html">
                            <span class="nav-main-link-name">Products</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_ecom_product_edit.html">
                            <span class="nav-main-link-name">Product Edit</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_ecom_customer.html">
                            <span class="nav-main-link-name">Customer</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">e-Learning</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_elearning_courses.html">
                            <span class="nav-main-link-name">Courses</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_elearning_course.html">
                            <span class="nav-main-link-name">Course</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_elearning_lesson.html">
                            <span class="nav-main-link-name">Lesson</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Forum</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_forum_categories.html">
                            <span class="nav-main-link-name">Categories</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_forum_topics.html">
                            <span class="nav-main-link-name">Topics</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_pages_forum_discussion.html">
                            <span class="nav-main-link-name">Discussion</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Boxed Backend</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="bd_dashboard.html">
                            <span class="nav-main-link-name">Dashboard</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="bd_search.html">
                            <span class="nav-main-link-name">Search</span>
                          </a>
                        </li>
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
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-heading">User Interface</li>
                <li class="nav-main-item open">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="true" href="#">
                    <i class="nav-main-link-icon fa fa-grip-vertical"></i>
                    <span class="nav-main-link-name">Blocks</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_blocks_styles.html">
                        <span class="nav-main-link-name">Styles</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_blocks_options.html">
                        <span class="nav-main-link-name">Options</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_blocks_forms.html">
                        <span class="nav-main-link-name">Forms</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_blocks_themed.html">
                        <span class="nav-main-link-name">Themed</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link active" href="be_blocks_api.html">
                        <span class="nav-main-link-name">API</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-pencil-ruler"></i>
                    <span class="nav-main-link-name">Widgets</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_widgets_tiles.html">
                        <span class="nav-main-link-name">Tiles</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_widgets_users.html">
                        <span class="nav-main-link-name">Users</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_widgets_stats.html">
                        <span class="nav-main-link-name">Statistics</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_widgets_media.html">
                        <span class="nav-main-link-name">Media</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_widgets_blog.html">
                        <span class="nav-main-link-name">Blog</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-layer-group"></i>
                    <span class="nav-main-link-name">Elements</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_grid.html">
                        <span class="nav-main-link-name">Grid</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_icons.html">
                        <span class="nav-main-link-name">Icons</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_typography.html">
                        <span class="nav-main-link-name">Typography</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_buttons.html">
                        <span class="nav-main-link-name">Buttons</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_navigation.html">
                        <span class="nav-main-link-name">Navigation</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_tabs.html">
                        <span class="nav-main-link-name">Tabs</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_alerts.html">
                        <span class="nav-main-link-name">Alerts</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_progress.html">
                        <span class="nav-main-link-name">Progress</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_tooltips.html">
                        <span class="nav-main-link-name">Tooltips</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_popovers.html">
                        <span class="nav-main-link-name">Popovers</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_modals.html">
                        <span class="nav-main-link-name">Modals</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_images.html">
                        <span class="nav-main-link-name">Images</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_animations.html">
                        <span class="nav-main-link-name">Animations</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_ribbons.html">
                        <span class="nav-main-link-name">Ribbons</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_timeline.html">
                        <span class="nav-main-link-name">Timeline</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_accordion.html">
                        <span class="nav-main-link-name">Accordion</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_ui_color_themes.html">
                        <span class="nav-main-link-name">Color Themes</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-list-alt"></i>
                    <span class="nav-main-link-name">Tables</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_tables_styles.html">
                        <span class="nav-main-link-name">Styles</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_tables_responsive.html">
                        <span class="nav-main-link-name">Responsive</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_tables_helpers.html">
                        <span class="nav-main-link-name">Helpers</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_tables_pricing.html">
                        <span class="nav-main-link-name">Pricing</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_tables_datatables.html">
                        <span class="nav-main-link-name">DataTables</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-edit"></i>
                    <span class="nav-main-link-name">Forms</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_elements.html">
                        <span class="nav-main-link-name">Elements</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_Layouts.html">
                        <span class="nav-main-link-name">Layouts</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_input_groups.html">
                        <span class="nav-main-link-name">Input Groups</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_plugins.html">
                        <span class="nav-main-link-name">Plugins</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_editors.html">
                        <span class="nav-main-link-name">Editors</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">CKEditor 5</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_forms_ckeditor5_classic.html">
                            <span class="nav-main-link-name">Classic</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_forms_ckeditor5_inline.html">
                            <span class="nav-main-link-name">Inline</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_validation.html">
                        <span class="nav-main-link-name">Validation</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_forms_premade.html">
                        <span class="nav-main-link-name">Pre-made</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-heading">Build</li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-vector-square"></i>
                    <span class="nav-main-link-name">Layout</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">General</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_default.html">
                            <span class="nav-main-link-name">Default</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_flipped.html">
                            <span class="nav-main-link-name">Flipped</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_native_scrolling.html">
                            <span class="nav-main-link-name">Native Scrolling</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Header</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                            <span class="nav-main-link-name">Static</span>
                          </a>
                          <ul class="nav-main-submenu">
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_modern.html">
                                <span class="nav-main-link-name">Modern</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_classic.html">
                                <span class="nav-main-link-name">Classic</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_classic_dark.html">
                                <span class="nav-main-link-name">Classic Dark</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_glass.html">
                                <span class="nav-main-link-name">Glass</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_glass_dark.html">
                                <span class="nav-main-link-name">Glass Dark</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                            <span class="nav-main-link-name">Fixed</span>
                          </a>
                          <ul class="nav-main-submenu">
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_fixed_modern.html">
                                <span class="nav-main-link-name">Modern</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_fixed_classic.html">
                                <span class="nav-main-link-name">Classic</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_fixed_classic_dark.html">
                                <span class="nav-main-link-name">Classic Dark</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_fixed_glass.html">
                                <span class="nav-main-link-name">Glass</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="be_layout_header_fixed_glass_dark.html">
                                <span class="nav-main-link-name">Glass Dark</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Sidebar</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_sidebar_dark.html">
                            <span class="nav-main-link-name">Dark</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_sidebar_hidden.html">
                            <span class="nav-main-link-name">Hidden</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_sidebar_mini.html">
                            <span class="nav-main-link-name">Mini</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Side Overlay</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_side_overlay_visible.html">
                            <span class="nav-main-link-name">Visible</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_side_overlay_hoverable.html">
                            <span class="nav-main-link-name">Hoverable</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_side_overlay_no_page_overlay.html">
                            <span class="nav-main-link-name">No Page Overlay</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Main Content</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_content_boxed.html">
                            <span class="nav-main-link-name">Boxed</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_content_narrow.html">
                            <span class="nav-main-link-name">Narrow</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_content_full_width.html">
                            <span class="nav-main-link-name">Full Width</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Hero</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_hero_color.html">
                            <span class="nav-main-link-name">Color</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_hero_bubbles.html">
                            <span class="nav-main-link-name">Bubbles</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_hero_image.html">
                            <span class="nav-main-link-name">Image</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="be_layout_hero_video.html">
                            <span class="nav-main-link-name">Video</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_layout_api.html">
                        <span class="nav-main-link-name">API</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-cogs"></i>
                    <span class="nav-main-link-name">Components</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_charts.html">
                        <span class="nav-main-link-name">Charts</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_onboarding.html">
                        <span class="nav-main-link-name">Onboarding</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_loaders.html">
                        <span class="nav-main-link-name">Loaders</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_dialogs.html">
                        <span class="nav-main-link-name">Dialogs</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_notifications.html">
                        <span class="nav-main-link-name">Notifications</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_nestable.html">
                        <span class="nav-main-link-name">Nestable</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_gallery.html">
                        <span class="nav-main-link-name">Gallery</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_sliders.html">
                        <span class="nav-main-link-name">Sliders</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_carousel.html">
                        <span class="nav-main-link-name">Carousel</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_rating.html">
                        <span class="nav-main-link-name">Rating</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_appear.html">
                        <span class="nav-main-link-name">Appear</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_calendar.html">
                        <span class="nav-main-link-name">Calendar</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_image_cropper.html">
                        <span class="nav-main-link-name">Image Cropper</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_maps_vector.html">
                        <span class="nav-main-link-name">Vector Maps</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_comp_syntax_highlighting.html">
                        <span class="nav-main-link-name">Syntax Highlighting</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-puzzle-piece"></i>
                    <span class="nav-main-link-name">Main Menu</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="#">
                        <span class="nav-main-link-name">Link 1-1</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="#">
                        <span class="nav-main-link-name">Link 1-2</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                        <span class="nav-main-link-name">Sub Level 2</span>
                      </a>
                      <ul class="nav-main-submenu">
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="#">
                            <span class="nav-main-link-name">Link 2-1</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link" href="#">
                            <span class="nav-main-link-name">Link 2-2</span>
                          </a>
                        </li>
                        <li class="nav-main-item">
                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                            <span class="nav-main-link-name">Sub Level 3</span>
                          </a>
                          <ul class="nav-main-submenu">
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="#">
                                <span class="nav-main-link-name">Link 3-1</span>
                              </a>
                            </li>
                            <li class="nav-main-item">
                              <a class="nav-main-link" href="#">
                                <span class="nav-main-link-name">Link 3-2</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-heading">Pages</li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-globe-americas"></i>
                    <span class="nav-main-link-name">Generic</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_blank.html">
                        <span class="nav-main-link-name">Blank</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_blank_block.html">
                        <span class="nav-main-link-name">Blank (Block)</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_blank_breadcrumb.html">
                        <span class="nav-main-link-name">Blank (Breadcrumb)</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_search.html">
                        <span class="nav-main-link-name">Search</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_profile.html">
                        <span class="nav-main-link-name">Profile</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_profile_edit.html">
                        <span class="nav-main-link-name">Profile Edit</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_inbox.html">
                        <span class="nav-main-link-name">Inbox</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_invoice.html">
                        <span class="nav-main-link-name">Invoice</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_faq.html">
                        <span class="nav-main-link-name">FAQ</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_blog.html">
                        <span class="nav-main-link-name">Blog</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_story.html">
                        <span class="nav-main-link-name">Story</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_project_list.html">
                        <span class="nav-main-link-name">Project List</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_project.html">
                        <span class="nav-main-link-name">Project</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_upgrade_plan.html">
                        <span class="nav-main-link-name">Upgrade Plan</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_team.html">
                        <span class="nav-main-link-name">Team</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_contact.html">
                        <span class="nav-main-link-name">Contact</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_generic_todo.html">
                        <span class="nav-main-link-name">Todo</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_coming_soon.html">
                        <span class="nav-main-link-name">Coming Soon</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_maintenance.html">
                        <span class="nav-main-link-name">Maintenance</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_status.html">
                        <span class="nav-main-link-name">Status</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_installation.html">
                        <span class="nav-main-link-name">Installation</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_checkout.html">
                        <span class="nav-main-link-name">Checkout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-user-lock"></i>
                    <span class="nav-main-link-name">Authentication</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_auth_all.html">
                        <span class="nav-main-link-name">All</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_signin.html">
                        <span class="nav-main-link-name">Sign In</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_signin2.html">
                        <span class="nav-main-link-name">Sign In 2</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_signin3.html">
                        <span class="nav-main-link-name">Sign In 3</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_signup.html">
                        <span class="nav-main-link-name">Sign Up</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_signup2.html">
                        <span class="nav-main-link-name">Sign Up 2</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_signup3.html">
                        <span class="nav-main-link-name">Sign Up 3</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_lock.html">
                        <span class="nav-main-link-name">Lock Screen</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_lock2.html">
                        <span class="nav-main-link-name">Lock Screen 2</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_lock3.html">
                        <span class="nav-main-link-name">Lock Screen 3</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_reminder.html">
                        <span class="nav-main-link-name">Pass Reminder</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_reminder2.html">
                        <span class="nav-main-link-name">Pass Reminder 2</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_auth_reminder3.html">
                        <span class="nav-main-link-name">Pass Reminder 3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-flag"></i>
                    <span class="nav-main-link-name">Error</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="be_pages_error_all.html">
                        <span class="nav-main-link-name">All</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_error_400.html">
                        <span class="nav-main-link-name">400</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_error_401.html">
                        <span class="nav-main-link-name">401</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_error_403.html">
                        <span class="nav-main-link-name">403</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_error_404.html">
                        <span class="nav-main-link-name">404</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_error_500.html">
                        <span class="nav-main-link-name">500</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="op_error_503.html">
                        <span class="nav-main-link-name">503</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                    <i class="nav-main-link-icon fa fa-coffee"></i>
                    <span class="nav-main-link-name">Get Started</span>
                  </a>
                  <ul class="nav-main-submenu">
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="gs_backend.html">
                        <span class="nav-main-link-name">Backend</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="gs_backend_boxed.html">
                        <span class="nav-main-link-name">Backend Boxed</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="gs_landing.html">
                        <span class="nav-main-link-name">Landing</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="gs_rtl_backend.html">
                        <span class="nav-main-link-name">RTL Backend</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="gs_rtl_backend_boxed.html">
                        <span class="nav-main-link-name">RTL Backend Boxed</span>
                      </a>
                    </li>
                    <li class="nav-main-item">
                      <a class="nav-main-link" href="gs_rtl_landing.html">
                        <span class="nav-main-link-name">RTL Landing</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
      <header id="page-header">
        <div class="content-header">
          <div class="space-x-1">
          
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="sidebar_toggle">
              <i class="fa fa-fw fa-bars"></i>
            </button>
         
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="header_search_on">
              <i class="fa fa-fw fa-search"></i>
            </button>
            
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-themes-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-fw fa-wrench"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-lg p-0" aria-labelledby="page-header-themes-dropdown">
                <div class="p-3 bg-body-light rounded-top">
                  <h5 class="h6 text-center mb-0">
                    Color Themes
                  </h5>
                </div>
                <div class="p-3">
                  <div class="row g-0 text-center">
                    <div class="col-2">
                      <a class="text-default" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                    <div class="col-2">
                      <a class="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min.css" href="javascript:void(0)">
                        <i class="fa fa-2x fa-circle"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-3 bg-body-light rounded-bottom">
                  <div class="row g-sm text-center">
                    <div class="col-6">
                      <a class="dropdown-item fs-sm fw-medium mb-0" href="be_layout_api.html">
                        <i class="fa fa-flask opacity-50 me-1"></i> Layout API
                      </a>
                    </div>
                    <div class="col-6">
                      <a class="dropdown-item fs-sm fw-medium mb-0" href="be_ui_color_themes.html">
                        <i class="fa fa-paint-brush opacity-50 me-1"></i> Themes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div class="space-x-1">
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user d-sm-none"></i>
                <span class="d-none d-sm-inline-block fw-semibold">J. Smith</span>
                <i class="fa fa-angle-down opacity-50 ms-1"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0" aria-labelledby="page-header-user-dropdown">
                <div class="px-2 py-3 bg-body-light rounded-top">
                  <h5 class="h6 text-center mb-0">
                    John Smith
                  </h5>
                </div>
                <div class="p-2">
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="be_pages_generic_profile.html">
                    <span>Profile</span>
                    <i class="fa fa-fw fa-user opacity-25"></i>
                  </a>
                  <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                    <span>Inbox</span>
                    <i class="fa fa-fw fa-envelope-open opacity-25"></i>
                  </a>
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="be_pages_generic_invoice.html">
                    <span>Invoices</span>
                    <i class="fa fa-fw fa-file opacity-25"></i>
                  </a>
                  <div class="dropdown-divider"></div>

                 
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                    <span>Settings</span>
                    <i class="fa fa-fw fa-wrench opacity-25"></i>
                  </a>

                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="op_auth_signin.html">
                    <span>Sign Out</span>
                    <i class="fa fa-fw fa-sign-out-alt opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>
          
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-notifications" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-flag"></i>
                <span class="text-primary">&bull;</span>
              </button>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications">
                <div class="px-2 py-3 bg-body-light rounded-top">
                  <h5 class="h6 text-center mb-0">
                    Notifications
                  </h5>
                </div>
                <ul class="nav-items my-2 fs-sm">
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-check text-success"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">You’ve upgraded to a VIP account successfully!</p>
                        <div class="text-muted">15 min ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">Please check your payment info since we can’t validate them!</p>
                        <div class="text-muted">50 min ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-times text-danger"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">Web server stopped responding and it was automatically restarted!</p>
                        <div class="text-muted">4 hours ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">Please consider upgrading your plan. You are running out of space.</p>
                        <div class="text-muted">16 hours ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="text-dark d-flex py-2" href="javascript:void(0)">
                      <div class="flex-shrink-0 me-2 ms-3">
                        <i class="fa fa-fw fa-plus text-primary"></i>
                      </div>
                      <div class="flex-grow-1 pe-2">
                        <p class="fw-medium mb-1">New purchases! +$250</p>
                        <div class="text-muted">1 day ago</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="p-2 bg-body-light rounded-bottom">
                  <a class="dropdown-item text-center mb-0" href="javascript:void(0)">
                    <i class="fa fa-fw fa-flag opacity-50 me-1"></i> View All
                  </a>
                </div>
              </div>
            </div>
           
            <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="side_overlay_toggle">
              <i class="fa fa-fw fa-stream"></i>
            </button>
          </div>
        </div>
     
        <div id="page-header-search" class="overlay-header bg-body-extra-light">
          <div class="content-header">
            <form class="w-100" action="be_pages_generic_search.html" method="POST">
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
          <h2 class="content-heading">Blocks API</h2>
          <div class="block block-rounded">
            <div class="block-header block-header-default">
              <h3 class="block-title">Usage</h3>
            </div>
            <div class="block-content">
              <p>
                Using the blocks API is easy. You will just have to pass your block’s id as well as one of the available modes depending of what you would like to achieve:
              </p>
              <p>
                <code>Codebase.block('mode', '#blockId');</code>
              </p>
              <div class="row">
                <div class="col-md-7">
                  <div class="table-responsive">
                    <table class="table table-bordered table-striped table-vcenter">
                      <thead>
                        <tr>
                        <td style={{ minWidth: '200px', width: '200px' }}>Live</td>
                          <th>Mode</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('content_toggle', '#my-block');">Toggle Content</button>
                          </td>
                          <td>
                            <code>content_toggle</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('content_hide', '#my-block');">Hide Content</button>
                          </td>
                          <td>
                            <code>content_hide</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('content_show', '#my-block');">Show Content</button>
                          </td>
                          <td>
                            <code>content_show</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('state_toggle', '#my-block');">Toggle State</button>
                          </td>
                          <td>
                            <code>state_toggle</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('state_loading', '#my-block');">State Loading</button>
                          </td>
                          <td>
                            <code>state_loading</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('state_normal', '#my-block');">State Normal</button>
                          </td>
                          <td>
                            <code>state_normal</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('fullscreen_toggle', '#my-block');">Toggle Fullscreen</button>
                          </td>
                          <td>
                            <code>fullscreen_toggle</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('fullscreen_on', '#my-block');">Fullscreen On</button>
                          </td>
                          <td>
                            <code>fullscreen_on</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('fullscreen_off', '#my-block');">Fullscreen Off</button>
                          </td>
                          <td>
                            <code>fullscreen_off</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('pinned_toggle', '#my-block');">Toggle Pinned</button>
                          </td>
                          <td>
                            <code>pinned_toggle</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('pinned_on', '#my-block');">Pinned On</button>
                          </td>
                          <td>
                            <code>pinned_on</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('pinned_off', '#my-block');">Pinned Off</button>
                          </td>
                          <td>
                            <code>pinned_off</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('close', '#my-block');">Close</button>
                          </td>
                          <td>
                            <code>close</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button type="button" class="btn btn-sm btn-alt-primary" onclick="Codebase.block('open', '#my-block');">Open</button>
                          </td>
                          <td>
                            <code>open</code>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="block block-bordered" id="my-block">
                    <div class="block-header">
                      <h3 class="block-title">Test Block</h3>
                      <div class="block-options">
                        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"></button>
                        <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                      </div>
                    </div>
                    <div class="block-content">
                      <p>This is our test block with id <code>my-block</code></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="content-heading">Interactivity</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Toggle</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Close</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="close"><i class="si si-close"></i></button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Maximize</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"></button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Refresh</h3>
                  <div class="block-options">
                   
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Pinned</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
                      <i class="si si-pin"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded block-mode-hidden">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Content <small>Hidden by default</small></h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">All Options</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"></button>
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
                      <i class="si si-pin"></i>
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="close">
                      <i class="si si-close"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="content-heading">Loading Indicators</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="block block-rounded">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Cog</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded block-mode-loading-location">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Location</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded block-mode-loading-energy">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Energy</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded block-mode-loading-refresh">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Refresh</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded block-mode-loading-sun">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Sun</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="block block-rounded block-mode-loading-repeat">
                <div class="block-header block-header-default">
                  <h3 class="block-title">Repeat</h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
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

export default Blockapi