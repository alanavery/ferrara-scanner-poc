# frozen_string_literal: true

require 'json'

module Aws
  module Cloudfront
    module_function

    def distribution
      CLOUDFRONT_DISTRIBUTIONS[Environment.current.to_sym]
    end

    def configuration
      JSON.parse(
        Aws.output(
          "cloudfront get-distribution-config --id #{distribution}"
        )
      )['DistributionConfig']
    end

    def origin
      configuration['Origins']['Items'].first['Id']
    end

    def invalidate_cache
      Aws.run(
        "cloudfront create-invalidation \
           --distribution-id #{distribution} \
           --paths '/*'"
      )
    end
  end
end
