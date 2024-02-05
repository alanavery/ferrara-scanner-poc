#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'lib/config'

def main
  ArgParser.parse

  puts 'Install Node.js modules…'
  Nodejs::Npm.install
  puts

  puts 'Clean old build files…'
  Nodejs::Npm.clean
  puts

  puts 'Build the project…'
  Nodejs::Npm.build
end

main if $PROGRAM_NAME == __FILE__
