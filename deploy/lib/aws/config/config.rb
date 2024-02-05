# frozen_string_literal: true

module Aws
  module Config
    module_function

    REGION = ENV.fetch('AWS_REGION', 'us-east-1')

    def options
      opts  = ["--region #{REGION}"]
      opts += ['--no-cli-pager'] unless Environment.ci?
      opts.join(' ')
    end
  end
end
