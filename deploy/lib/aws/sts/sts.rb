# frozen_string_literal: true

require 'json'

module Aws
  module Sts
    module_function

    def identity
      JSON.parse(Aws.output('sts get-caller-identity'))
    end

    def account_id
      identity['Account']
    end
  end
end
