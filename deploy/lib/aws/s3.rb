# frozen_string_literal: true

module Aws
  module S3
    module_function

    def bucket_name
      "#{Object::Config.project}-#{Environment.current}"
    end

    def sync_files_to_s3
      Aws.run(
        "s3 sync \
          --delete #{BUILD_DIRECTORY} \
          s3://#{bucket_name}/"
      )
    end
  end
end
