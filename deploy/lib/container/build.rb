# frozen_string_literal: true

require_relative '../../config'

module Container
  module Build
    module_function

    CONTEXT    = '.'
    DOCKERFILE = "#{CONTEXT}/Dockerfile".freeze
    PLATFORM   = 'linux/amd64'

    def base_options
      [
        "#{BINARY} build #{CONTEXT}",
        "--file #{DOCKERFILE}",
        "--platform #{PLATFORM}",
        "--cache-from #{Repository.name}:#{Environment.current}",
        "--build-arg ENVIRONMENT=#{Environment.current}"
      ]
    end

    def command
      (
        base_options +
        Repository.tags.map do |tag|
          "--tag #{tag}"
        end
      ).join(' ')
    end
  end
end
