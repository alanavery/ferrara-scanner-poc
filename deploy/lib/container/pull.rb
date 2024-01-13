# frozen_string_literal: true

module Container
  module Pull
    module_function

    def commands
      Repository.tags.filter_map do |tag|
        "#{BINARY} pull #{tag}" if tag.end_with? ":#{Environment.current}"
      end
    end
  end
end
