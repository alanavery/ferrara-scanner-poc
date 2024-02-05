# frozen_string_literal: true

require 'optparse'

module ArgParser
  module_function

  def parse(intro = nil)
    options = {}
    ARGV << '-h' if ARGV.empty?

    OptionParser.new do |opts|
      configure_banner(opts, intro)
      configure_environment_option(opts, options)
      configure_push_option(opts, options) if $PROGRAM_NAME.include? 'release'
      configure_help_option(opts)
    end.parse!

    validate_options(options)
    define_environment_variables(options)

    options
  end

  def configure_banner(opts, intro)
    opts.banner = intro
    opts.banner << "Usage: #{$PROGRAM_NAME} [OPTIONS ...]"
  end

  def configure_environment_option(opts, options)
    opts.on('-e', '--environment ENVIRONMENT', String, 'Target environment') do |opt|
      options[:environment] = opt
    end
  end

  def configure_push_option(opts, options)
    opts.on('-p', '--push', 'Push the release to remote') do
      options[:push_release] = 'true'
    end
  end

  def configure_help_option(opts)
    opts.on_tail('-h', '--help', 'Show this message') do
      puts opts
      exit
    end
  end

  def validate_options(options)
    raise OptionParser::MissingArgument unless options.length.positive?
  end

  def define_environment_variables(options)
    ENV['ENVIRONMENT']  = options[:environment]
    ENV['PUSH_RELEASE'] = options[:push_release]
  end
end
