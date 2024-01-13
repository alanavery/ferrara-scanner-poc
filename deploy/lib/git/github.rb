# frozen_string_literal: true

require_relative '../../config'

module Git
  module GitHub
    module_function

    def tag
      tag? ? ref_name : ''
    end

    def branch
      branch? ? ref_name : ''
    end

    def tag?
      ref.start_with? 'refs/tags/'
    end

    def branch?
      ref.start_with? 'refs/heads/'
    end

    def ref
      ENV.fetch('GITHUB_REF')
    end

    def ref_name
      ENV.fetch('GITHUB_REF_NAME')
    end

    def event_name
      ENV.fetch('GITHUB_EVENT_NAME').to_sym
    end

    def ci_events
      %i[
        push
        pull_request
        workflow_dispatch
      ]
    end

    def environment
      abort 'Workflow event name is not valid!' unless
        ci_events.include? event_name

      case ref_name
      when /^v([0-9]{8})(-[0-9]{2})$/
        'production'
      when /^v([0-9]{8})(-[0-9]{2})-rc$/
        'stage'
      else
        'dev'
      end
    end
  end
end
