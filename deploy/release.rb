#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'lib/config'

def main
  parse_args
  Environment::Validation.check

  puts "Creating new tag: '#{Git::Release.tag_name}'…"
  Git::Release.create

  return unless Config.push_release

  puts "Pushing branch '#{Git.branch}' and tag '#{Git::Release.tag_name}' to remote…"
  Git::Release.push
end

main if $PROGRAM_NAME == __FILE__
