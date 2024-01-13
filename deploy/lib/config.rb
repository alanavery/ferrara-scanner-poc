# frozen_string_literal: true

require 'date'
require 'json'
require_relative '../config'

Dir['deploy/lib/**/*.rb'].each { |file| require_relative file.split('/').drop(2).join('/') }

module Config
  module_function

  def company
    Nodejs::Package.name.split('-').first
  end

  def project_type
    Nodejs::Package.name.split('-').tail.join('-')
  end

  def project
    "#{company}-#{project_type}"
  end

  def project_
    project.gsub('-', '_')
  end

  def date
    Time.now.utc.to_date.strftime('%Y%m%d')
  end

  def push_release
    ENV.fetch('PUSH_RELEASE', 'false') == 'true'
  end
end
