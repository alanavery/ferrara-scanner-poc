# frozen_string_literal: true

module Container
  module Repository
    module_function

    def name
      "#{Registry.registry}/#{Environment.current}/#{Config.project}"
    end

    def tags
      Image.tags.compact.map do |tag|
        "#{name}:#{tag}"
      end
    end
  end
end
