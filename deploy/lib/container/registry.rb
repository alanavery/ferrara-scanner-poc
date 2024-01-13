# frozen_string_literal: true

module Container
  module Registry
    module_function

    def username
      'AWS'
    end

    def registry
      "#{Aws::Sts.account_id}.dkr.ecr.#{Aws::Config::REGION}.amazonaws.com"
    end

    def login_password
      Command.output("aws --region #{Aws::Config::REGION} ecr get-login-password").strip
    end

    def login_cmd
      [
        'echo',
        login_password,
        "| #{BINARY} login --username #{username} --password-stdin",
        registry
      ].join(' ')
    end
  end
end
