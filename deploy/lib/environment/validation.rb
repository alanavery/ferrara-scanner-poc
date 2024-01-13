# frozen_string_literal: true

module Environment
  module Validation
    module_function

    def check
      return if Environment.dev?

      return invalid_error unless valid?

      Git::Validation.check
    end

    def valid?
      Environment.all.include? Environment.current
    end

    def invalid_error
      abort "\nEnvironment '#{Environment.current}' is not valid."
    end
  end
end
