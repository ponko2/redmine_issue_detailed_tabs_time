require 'redmine'
require 'issue_tabs_listener.rb'

Redmine::Plugin.register :redmine_issue_history_tabs do
  name 'Redmine Issue Detailed Tabs & Time'
  author 'Mark Kalender'
  description 'This plugin provide breaks down issues comments into tabs, also adds a time log'
  version '0.0.6'
end
