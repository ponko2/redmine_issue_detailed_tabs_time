require 'redmine'

unless Rails.version > '6.0' && Rails.autoloaders.zeitwerk_enabled? then
  require_relative './lib/issue_tabs_view_listener'
end

require_dependency File.expand_path('../lib/redmine_issue_detailed_tabs_time_issues_helper_patch', __FILE__)

Redmine::Plugin.register :redmine_issue_detailed_tabs_time do

  project_module :issue_tracking do
	  permission :view_all, { :all => :index }
	  permission :view_comments, { :all => :index }
	  permission :view_activity, { :all => :index }
  end

  name 'Redmine Issue Detailed Tabs & Time'
  author 'Mark Kalender'
  description 'This plugin provide breaks down issues comments into tabs, also adds a time log'
  version '0.1.1'
end
