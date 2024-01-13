# frozen_string_literal: true

module Nodejs
  module Package
    module_function

    PATH = 'package.json'

    def file
      JSON.load_file(PATH)
    end

    def name
      file.fetch('name')
    end
  end
end
