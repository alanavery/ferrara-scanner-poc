# frozen_string_literal: true

module Aws
  module Validation
    module_function

    def check
      invalid_error unless valid?
    end

    def valid?
      Cloudfront.origin == "#{Object::Config.project}-#{Environment.current}"
    end

    def invalid_error
      abort "
        The CloudFront distribution is using an invalid origin:
          Expected: '#{Object::Config.project}-#{Environment.current}'
          Got:      '#{Cloudfront.origin}'
        Make sure to use the correct distribution ID and bucket origin.
      "
    end
  end
end
