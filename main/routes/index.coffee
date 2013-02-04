os 				      = require 'os'
url 			      = require 'url'
html_minifier   = require 'html-minifier'
async           = require 'async'

features_object = 
  one_click_rsvp: 
    title:  "One Click RSVP Widget"
    image:  "RSVPWidget"
    desc:   "Simple widget that enables clientele to join guest lists and reserve tables through a single click and without having to fill out cumbersome RSVP forms. You recieve consistent and reliable data, providing meaningful insights into your clientele. The widget can be placed on any webpage and Facebook fan-page or can be accessed at ClubbingOwl.com"
    additional_images: [
      "RSVPWidget_1"
      "RSVPWidget_2"
      "RSVPWidget_3"
    ]
  sms_communication:
    title:  "SMS Communication"
    image:  "SMSCommunication"
    desc:   "Use SMS to make announcements to your team and your clientele directly to their mobile. Enable your promoters to confirm reservation requests and send confirmations automatically."
    additional_images: [
      "SMSCommunication_1"
    ]
  viral_facebook_marketing:
    title:  "Viral Facebook Marketing"
    image:  "ViralFacebook"
    desc:   "When a client RSVPs, using our widget, your event information is posted on their Facebook wall, along with a link to the event. More posts of your event increase exposure and makes more people want to go."
  promoter_ratings:
    title:  "Promoter Ratings"
    image:  "PromoterRating"
    desc:   "ClubbingOwl provides a system for your clientele to rate their experience with a promoter and share it with their friends. A rating can only be given once the clientele has been checked in at the venue. Only friends of the ranker can see it, making the rating more relevant to your clientele and protecting the image of your promoters."
    additional_images: [
      "PromoterRating_1"
    ]
  guest_list_management:
    title:  "Guest List Management"
    image:  "GuestListManagement"
    desc:   "Promotional staff and team-managers can easily view, edit and grow Facebook-powered guest lists. Add clients manually even if they don't have Facebook. Instantly send a message to everyone on your guest list by updating your list \"status.\" ClubbingOwl will automatically send it to everyone via SMS/email. Communicating with your clients has never been easier!"
  live_chat:
    title:  "Live Team Chat"
    image:  "TeamChat"
    desc:   "Real time team communication system. Coordinate with your team easily. ClubbingOwl's internal chat system works on both PC & mobile."
  team_management:
    title:  "Table Management"
    image:  "TableManagement"
    desc:   "Easily build custom venue table layouts with a simple drag-and-drop floorplan builder and allow clientele to book tables. Change venue layout, table available, table reservation assignments and rest assured everyone on your staff is updated in 100% realtime."
    additional_images: [
      "TableManagement_1"
      "TableManagement_2"
      "TableManagement_3"
    ]
  tablet_and_mobile:
    title:  "Tablet and Mobile"
    image:  "TabletMobile"
    desc:   "One platform designed to run easily on PC, tablet and mobile. Hosts can check-in clientele using a tablet device and promoters can access their guest lists from a smartphone: any time, anywhere. ClubbingOwl is web-based and resizes in the web-browser to accommodate all web-enabled devices."
    additional_images: [
      "TabletMobile_1"
      "TabletMobile_2"
      "TabletMobile_3"
      "TabletMobile_4"
      "TabletMobile_5"
      "TabletMobile_6"
      "TabletMobile_7"
    ]
  promotional_staff_management:
    title:  "Promotional Staff Management"
    image:  "PromotionalStaffManagement"
    desc:   "Increase the exposure of your promoters through a ClubbingOwl profile and give them access to powerful marketing tools that will help them grow their clientele database. Monitor their progress, chat with them over the integrated team chat and track which of your promoters are working the hardest."
    additional_images: [
      "PromotionalStaffManagement_1"
    ]
  host_checkin_tool:
    title:  "Host Check-In Tool"
    image:  "CheckIn"
    desc:   "Swiftly Check-In clientele with a laptop, tablet or mobile device. Allow Hosts, at the door, to check-in clients at different price points and receive a report of total check-ins when the night ends. Also, make use of the easy look-up functionality, so you will never have to search through an entire list again! The host's guest list will always be 100% up to date thanks to our state of the art 100% realtime technology."
    additional_images: [
      "CheckIn_1"
      "CheckIn_2"
      "CheckIn_3"
      "CheckIn_4"
    ]
  email_marketing:
    title:  "Email Marketing"
    image:  "EmailMarketing"
    desc:   "With ClubbingOwl all your marketing tools are integrated into one simple platform! Design email newsletters and send them to your client database at a cheaper rate than solutions such as MailChimp."
  search_engine_optimization:
    title:  "Search Engine Optimization"
    image:  "SEO"
    desc:   "Improve the search engine discovery of your guest lists, events, promoters, and venues. ClubbingOwl's public-facing web application for clubgoers was designed with great care to be easily indexible by search engines and boost our client search discovery performance."
    additional_images: [
      "SEO_1"
    ]
  private_and_collaberative_notes:
    title:  "Private and Collaberative Notes"
    image:  "Notes"
    desc:   "Know your client even before they know you! Add private or collaborative notes to your clientele database and deliver exceptional customer service. Set yourself apart from competitors and capture clientele preferences as you grow your client base."

blogs_object = 
  the_only_realtime_venue_management_system:
      title:  "The Only REALTIME Venue Management System"
      date:   "1 January, 2013"
      author: "Casey"
      body:   ""



    
render_views = (req, res, body_view, args = {}, code = 200) ->
  
  async.parallel [
    
    (callback) ->
      
      
  ], () ->
    console.log 'foo'
  
  
  complete = (arg) ->

    response  = arg.response
    code      = arg.code

    if query.hasOwnProperty 'ajaxify'
      res.send html_minifier.minify response.body,
        collapseWhitespace: true
        removeComments: true,
        code
    else
      if response.header != '' and response.body != '' and response.footer != ''
        res.send html_minifier.minify response.header + response.body + response.footer,
          collapseWhitespace: true
          removeComments: true,
          code
  
  query = url.parse(req.url, true).query
  
  response = 
    header: ''
    body:   ''
    footer: ''
  
  if query.hasOwnProperty 'ajaxify'
    
    code = 200
    res.render body_view, args, (err, html) ->
      response.body = html
      complete
        response: response
        code:     code
    
  else
    res.render body_view, args, (err, html) ->
      response.body = html
      complete
        response: response
        code:     code

    res.render 'view_header', args, (err, html) -> 
      response.header = html
      complete 
        response: response
        code:     code

    res.render 'view_footer', args, (err, html) -> 
      response.footer = html
      complete 
        response: response
        code:     code


exports.index = (req, res) ->
  render_views(req, res, 'view_index')
    
exports.features = (req, res) ->
  console.log req
  render_views(req, res, 'view_features', features: features_object)

exports.feature = (req, res) ->
  console.log req.params
  if features_object[req.params.feature]?
    render_views(req, res, 'view_feature', features: features_object, features_index: req.params.feature)
  else
    render_views(req, res, 'view_404', {}, 404)

exports.faq = (req, res) ->
  render_views(req, res, 'view_faq')

exports.about = (req, res) ->
  render_views(req, res, 'view_about')

exports.blogs = (req, res) ->
  render_views(req, res, 'view_blog')
  
  
  
exports.blog = (req, res) ->
  console.log req.params
  if blogs_object[req.params.entry]?
    render_views(req, res, 'view_blog', features: features_object, features_index: req.params.feature)
  else 
    render_views(req, res, 'view_404', {}, 404)



exports.contact = (req, res) ->
  render_views(req, res, 'view_contact')

exports.error = (req, res) ->
  render_views(req, res, 'view_404', {}, 404)
