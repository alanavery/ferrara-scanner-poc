#!/usr/bin/env ruby
# frozen_string_literal: true

# Determine which is the current environment using GitHub Action's GITHUB_* variables.

require_relative 'lib/config'

def main
  ENV['ENVIRONMENT'] = Git::GitHub.environment

  Environment::Validation.check

  puts ENV.fetch('ENVIRONMENT', nil)
end

main if $PROGRAM_NAME == __FILE__
