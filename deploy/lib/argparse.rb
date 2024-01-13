# frozen_string_literal: true

require 'optparse'

# rubocop:disable Metrics/MethodLength,Metrics/AbcSize
def parse_args(intro = nil)
  options = {}
  ARGV << '-h' if ARGV.empty?

  OptionParser.new do |opts|
    opts.banner = intro
    opts.banner << "Usage: #{$PROGRAM_NAME} [OPTIONS ...]"

    opts.on('-e', '--environment ENVIRONMENT', String, 'Target environment') do |opt|
      options[:environment] = opt
    end

    if $PROGRAM_NAME.include? 'release'
      opts.on('-p', '--push', 'Push the release to remote') do
        options[:push_release] = 'true'
      end
    end

    opts.on_tail('-h', '--help', 'Show this message') do
      puts opts
      exit
    end
  end.parse!

  raise OptionParser::MissingArgument unless options.length.positive?

  ENV['ENVIRONMENT']  = options[:environment]
  ENV['PUSH_RELEASE'] = options[:push_release]

  options
end
# rubocop:enable Metrics/MethodLength,Metrics/AbcSize
