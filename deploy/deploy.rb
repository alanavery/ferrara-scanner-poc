#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'lib/config'

def main
  parse_args
  Environment::Validation.check
  Aws::Validation.check

  puts "Sync built files to S3 bucket #{Aws::S3.bucket_name}…"
  Aws::S3.sync_files_to_s3
  puts

  puts "Invalidate CDN cache for #{Aws::Cloudfront.distribution}…"
  Aws::Cloudfront.invalidate_cache
end

main if $PROGRAM_NAME == __FILE__
